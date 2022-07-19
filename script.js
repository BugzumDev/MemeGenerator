// MEME Generator

// Image upload
window.addEventListener('load', function() {
    document.querySelector('input[type="file"]').addEventListener('change', function() {
        if (this.files && this.files[0]) {
            var img = document.querySelector('img');
            img.onload = () => {
                URL.revokeObjectURL(img.src);  // no longer needed, free memory
            }
  
            img.src = URL.createObjectURL(this.files[0]); // set src to blob url
        }
    });
  });

// Others
function applyChanges() {
    console.log("Applying Changes...");
    applyBTN = document.getElementById('applyChangesBTN')
    upperTextB = document.getElementById('memeUpper')
    bottomTextB = document.getElementById('memeBottom')
    upperText = document.getElementById('upperText')
    bottomText = document.getElementById('bottomText')
    upperValue = upperTextB.value;
    bottomValue = bottomTextB.value;
    upperText.innerHTML = upperValue
    bottomText.innerHTML = bottomValue
}