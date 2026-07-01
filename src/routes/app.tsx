import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  getHabits, getLogs, saveHabits, saveLogs, toggleHabit, isCompletedToday,
  getStreak, getMilestoneMessage, updateHabit, isScheduledToday, frequencyLabel,
} from "@/lib/habits";
import type { Habit, HabitLog } from "@/lib/habits";
import { Leaf, Sparkles, ChevronDown, Pencil, Check } from "lucide-react";
import { toast } from "sonner";
import { rescheduleAllReminders, scheduleReminder } from "@/lib/notifications";

export const Route = createFileRoute("/app")({
  component: TodayPage,
  head: () => ({
    meta: [
      { title: "Continuum — Your daily ritual" },
      { name: "description", content: "Build lasting habits with Continuum. Simple streak tracking, beautiful progress visualization." },
    ],
  }),
});

function TodayPage() {
  const [habits, setHabits] = useState<Habit[]>([]);
  const [logs, setLogs] = useState<HabitLog[]>([]);
  const [mounted, setMounted] = useState(false);
  const [showNotScheduled, setShowNotScheduled] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editName, setEditName] = useState("");
  const [editDesc, setEditDesc] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [newName, setNewName] = useState("");
  const [newDesc, setNewDesc] = useState("");
  const [newColor, setNewColor] = useState("#6366f1");
  const [newFrequency, setNewFrequency] = useState<"daily" | "weekdays" | "weekends">("daily");

  useEffect(() => {
    const h = getHabits();
    setHabits(h);
    setLogs(getLogs());
    rescheduleAllReminders(h);
    setMounted(true);
  }, []);

  const handleToggle = (habitId: string) => {
    const streakBefore = getStreak(habitId, logs, habits);
    const updated = toggleHabit(habitId, logs);
    setLogs(updated);
    saveLogs(updated);

    const streakAfter = getStreak(habitId, updated, habits);
    if (streakAfter > streakBefore) {
      const msg = getMilestoneMessage(streakAfter);
      if (msg) {
        const habit = habits.find((h) => h.id === habitId);
        toast.success(msg, { description: habit?.name });
      }
    }
  };

  const handleAdd = () => {
    if (!newName.trim()) return;
    const habit: Habit = {
      id: crypto.randomUUID(),
      name: newName.trim(),
      description: newDesc.trim() || undefined,
      color: newColor,
      frequency: newFrequency,
      createdAt: new Date().toISOString(),
      reminderTime: undefined,
      order: habits.length,
    };
    const updated = [...habits, habit];
    setHabits(updated);
    scheduleReminder(habit);
    saveHabits(updated);
    setNewName("");
    setNewDesc("");
    setNewColor("#6366f1");
    setNewFrequency("daily");
    setShowAddForm(false);
  };

  const handleEditSave = () => {
    if (!editingId || !editName.trim()) return;
    const habit = habits.find((h) => h.id === editingId);
    if (!habit) return;
    const updated = updateHabit(habits, { ...habit, name: editName.trim(), description: editDesc.trim() || undefined });
    setHabits(updated);
    saveHabits(updated);
    setEditingId(null);
    setEditName("");
    setEditDesc("");
  };

  const handleDelete = (habitId: string) => {
    const updated = habits.filter((h) => h.id !== habitId);
    setHabits(updated);
    saveHabits(updated);
    toast("Habit removed");
  };

  const startEdit = (habit: Habit) => {
    setEditingId(habit.id);
    setEditName(habit.name);
    setEditDesc(habit.description || "");
  };

  const scheduledToday = habits.filter((h) => isScheduledToday(h));
  const notScheduledToday = habits.filter((h) => !isScheduledToday(h));
  const completedCount = scheduledToday.filter((h) => isCompletedToday(h.id, logs)).length;
  const allDone = scheduledToday.length > 0 && completedCount === scheduledToday.length;

  if (!mounted) return null;

  const now = new Date();
  const greeting = now.getHours() < 12 ? "Good morning" : now.getHours() < 17 ? "Good afternoon" : "Good evening";
  const dateStr = now.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });
  const subtitle = scheduledToday.length === 0 && habits.length > 0
    ? "Nothing scheduled today"
    : scheduledToday.length === 0 ? ""
    : allDone ? "All done for today ✨"
    : `${completedCount} of ${scheduledToday.length} done`;

  const colors = ["#6366f1", "#ec4899", "#f59e0b", "#10b981", "#3b82f6", "#8b5cf6"];

  return (
    <div className="min-h-screen pb-28 relative">
      <div className="relative max-w-lg mx-auto px-5 pt-12">
        <div className="flex items-start justify-between animate-fade-up-blur">
          <div>
            <p className="text-[13px] text-muted-foreground font-medium">{greeting}</p>
            <h1 className="text-2xl font-semibold text-foreground mt-0.5 tracking-tight" style={{ lineHeight: "1.2" }}>
              {allDone ? (
                <span className="flex items-center gap-2">Perfect day <Sparkles className="w-5 h-5 text-primary" /></span>
              ) : "Your daily ritual"}
            </h1>
            <p className="text-sm text-muted-foreground mt-1">{dateStr}{subtitle && ` · ${subtitle}`}</p>
          </div>
        </div>

        {/* Quick add button */}
        <div className="mt-6 animate-fade-up-blur" style={{ animationDelay: "60ms" }}>
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="w-full py-3 rounded-xl border-2 border-dashed border-muted-foreground/20 text-sm font-medium text-muted-foreground hover:text-foreground hover:border-muted-foreground/40 transition-colors"
          >
            {showAddForm ? "Cancel" : "+ Add habit"}
          </button>
        </div>

        {/* Add form */}
        {showAddForm && (
          <div className="mt-3 p-4 rounded-2xl bg-card shadow-[0_1px_4px_0_rgba(0,0,0,0.06)] animate-fade-up-blur space-y-3">
            <input
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              placeholder="Habit name"
              className="w-full px-3 py-2 rounded-lg bg-muted/50 text-sm text-foreground placeholder:text-muted-foreground border-none outline-none ring-1 ring-border focus:ring-primary"
            />
            <input
              value={newDesc}
              onChange={(e) => setNewDesc(e.target.value)}
              placeholder="Description (optional)"
              className="w-full px-3 py-2 rounded-lg bg-muted/50 text-sm text-foreground placeholder:text-muted-foreground border-none outline-none ring-1 ring-border focus:ring-primary"
            />
            <div className="flex gap-2">
              {colors.map((c) => (
                <button key={c} onClick={() => setNewColor(c)} className={`w-7 h-7 rounded-full transition-transform ${newColor === c ? "scale-125 ring-2 ring-offset-2 ring-offset-card ring-primary" : ""}`} style={{ backgroundColor: c }} />
              ))}
            </div>
            <div className="flex gap-1.5">
              {(["daily", "weekdays", "weekends"] as const).map((f) => (
                <button key={f} onClick={() => setNewFrequency(f)} className={`px-3 py-1.5 rounded-lg text-xs font-medium capitalize transition-colors ${newFrequency === f ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>{f}</button>
              ))}
            </div>
            <button onClick={handleAdd} className="w-full py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity">Add</button>
          </div>
        )}

        {/* Habit list */}
        {habits.length === 0 ? (
          <div className="border-2 border-dashed border-muted-foreground/20 rounded-2xl py-16 px-6 text-center animate-fade-up-blur mt-6" style={{ animationDelay: "160ms" }}>
            <Leaf className="w-7 h-7 text-muted-foreground/40 mx-auto mb-4" />
            <p className="text-foreground font-semibold text-lg">A fresh start</p>
            <p className="text-sm text-muted-foreground mt-1.5 max-w-[240px] mx-auto" style={{ textWrap: "pretty" }}>Add your first habit to get started</p>
          </div>
        ) : (
          <div className="space-y-3 mt-6">
            {scheduledToday.map((habit) => (
              <div key={habit.id} className="relative rounded-2xl bg-card shadow-[0_1px_4px_0_rgba(0,0,0,0.06)] overflow-hidden">
                <div className="absolute left-2.5 top-3 bottom-3 w-1 rounded-full" style={{ backgroundColor: habit.color }} />
                {editingId === habit.id ? (
                  <div className="p-4 pl-6 space-y-2">
                    <input value={editName} onChange={(e) => setEditName(e.target.value)} className="w-full px-3 py-2 rounded-lg bg-muted/50 text-sm text-foreground border-none outline-none ring-1 ring-border focus:ring-primary" autoFocus />
                    <input value={editDesc} onChange={(e) => setEditDesc(e.target.value)} placeholder="Description" className="w-full px-3 py-2 rounded-lg bg-muted/50 text-sm text-foreground border-none outline-none ring-1 ring-border focus:ring-primary" />
                    <div className="flex gap-2">
                      <button onClick={handleEditSave} className="px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-xs font-medium">Save</button>
                      <button onClick={() => setEditingId(null)} className="px-3 py-1.5 rounded-lg bg-muted text-muted-foreground text-xs font-medium">Cancel</button>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-3 p-4 pl-6">
                    <button onClick={() => handleToggle(habit.id)} className={`flex-shrink-0 w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all active:scale-90 ${isCompletedToday(habit.id, logs) ? "border-transparent" : "border-border bg-background hover:border-primary/50"}`}
                      style={isCompletedToday(habit.id, logs) ? { backgroundColor: habit.color } : undefined}>
                      {isCompletedToday(habit.id, logs) && <Check className="w-5 h-5 text-white" strokeWidth={2.5} />}
                    </button>
                    <div className="flex-1 min-w-0">
                      <p className={`font-medium text-[15px] leading-snug ${isCompletedToday(habit.id, logs) ? "line-through text-muted-foreground" : "text-foreground"}`}>{habit.name}</p>
                      {habit.description && <p className="text-sm text-muted-foreground mt-0.5 truncate">{habit.description}</p>}
                    </div>
                    {getStreak(habit.id, logs, habits) > 0 && (
                      <div className="flex items-baseline gap-0.5">
                        <span className="font-mono text-base font-semibold text-foreground tabular-nums">{getStreak(habit.id, logs, habits)}</span>
                        <span className="text-xs text-muted-foreground font-medium">d</span>
                      </div>
                    )}
                    <button onClick={() => startEdit(habit)} className="p-1.5 rounded-lg hover:bg-muted transition-colors flex-shrink-0"><Pencil className="w-3.5 h-3.5 text-muted-foreground/50" /></button>
                    <button onClick={() => handleDelete(habit.id)} className="p-1.5 rounded-lg hover:bg-destructive/10 transition-colors flex-shrink-0"><span className="text-xs text-destructive font-medium">×</span></button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Not scheduled today */}
        {notScheduledToday.length > 0 && (
          <div className="mt-4">
            <button onClick={() => setShowNotScheduled(!showNotScheduled)} className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium mb-2 hover:text-foreground transition-colors">
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${showNotScheduled ? "rotate-0" : "-rotate-90"}`} />
              Not scheduled today ({notScheduledToday.length})
            </button>
            {showNotScheduled && (
              <div className="space-y-2 opacity-60">
                {notScheduledToday.map((habit) => (
                  <div key={habit.id} className="flex items-center gap-3 rounded-xl bg-card/50 px-4 py-3">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: habit.color }} />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-muted-foreground">{habit.name}</p>
                      <p className="text-[11px] text-muted-foreground/60">{frequencyLabel(habit.frequency)}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
