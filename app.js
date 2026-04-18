const mainImg=document.getElementById("mainImage");
const smallImg=document.querySelectorAll(".thumb");
const btn=document.querySelector("button");

// loop
smallImg.forEach(i => {
    i.addEventListener('click', function() {
        // Pehle sab ka border black karein
        smallImg.forEach(img =>img);
        
        // Phir jis par click hua (this), uska red karein
        this.style.borderColor = 'black';
        
        // Aur main image change karein
        mainImg.src = this.src;
    });
});

btn.addEventListener('click', function() {
    // console.log("Button Clicked!");
        alert('Product added to your cart successfully!');
         this.innerText = 'ADDED';
        this.style.backgroundColor = 'green';
    });
    