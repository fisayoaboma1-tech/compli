import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Cloudinary credentials
cloudinary.config({
  cloud_name: 'dahp1ngcc',
  api_key: '817731441967673',
  api_secret: 'K1scz-kUkOWcXmTCRRCIb-POYv8'
});

// Directory containing images
const imagesDir = path.join(__dirname, 'public', 'images');

// Check if directory exists
if (!fs.existsSync(imagesDir)) {
  console.error('Images directory not found!');
  process.exit(1);
}

// Get all image files
const files = fs.readdirSync(imagesDir).filter(file => {
  const ext = path.extname(file).toLowerCase();
  return ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'].includes(ext);
});

console.log(`Found ${files.length} images to upload\n`);

// Upload results
const results = [];

async function uploadImage(filePath, fileName) {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      folder: 'ptssn',
      use_filename: true,
      unique_filename: false,
      overwrite: true
    });

    console.log(`✓ Uploaded: ${fileName}`);
    console.log(`  URL: ${result.secure_url}\n`);

    results.push({
      localName: fileName,
      cloudinaryUrl: result.secure_url,
      publicId: result.public_id
    });
  } catch (error) {
    console.error(`✗ Failed to upload ${fileName}:`, error.message);
  }
}

async function main() {
  for (const file of files) {
    const filePath = path.join(imagesDir, file);
    await uploadImage(filePath, file);
  }

  // Write results to a JSON file
  const outputPath = path.join(__dirname, 'cloudinary-uploads.json');
  fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));

  console.log(`\nUpload complete! Results saved to: ${outputPath}`);
  console.log(`Successfully uploaded: ${results.length}/${files.length} images`);
}

main();