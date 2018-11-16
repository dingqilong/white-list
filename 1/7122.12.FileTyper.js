
// Examine the first 4 bytes of the specified blob. If this "magic number"
// identifies the type of the file, asynchronously set a property on the Blob.
function typefile(file) {
    var slice = file.slice(0,4);       // Only read the start of the file
    var reader = new FileReader();     // Create an asynchronous FileReader
    reader.readAsArrayBuffer(slice);   // Read the slice of the file
    reader.onload = function(e) {
        var buffer = reader.result;           // The result ArrayBuffer
        var view = new DataView(buffer);      // Get access to the result bytes
        var magic = view.getUint32(0, false); // Read 4 bytes, big-endian 
        switch(magic) {                       // Determine file type from them
        case 0x89504E47: file.verified_type = "image/png"; break;
        case 0x47494638: file.verified_type = "image/gif"; break;
        case 0x25504446: file.verified_type = "application/pdf"; break;
        case 0x504b0304: file.verified_type = "application/zip"; break;
        }
        console.log(file.name, file.verified_type);
    };
}
