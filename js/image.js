/**
 * image.js - Code to convert uploaded image to a Date-Url
 */

/**
 * Converts image file to a usable data-url
 * @param {image} file 
 * @returns Data-URL
 */
export function getFileDataUrl(file) {
   return new Promise((resolve, reject) => {
     // Create a FileReader instance
     const reader = new FileReader();

     // Manages file loading
     reader.onload = () => resolve(reader.result);

     // Handle any errors
     reader.onerror = error => reject(error);

     // Read the file as a data URL
     reader.readAsDataURL(file);
   });
}
