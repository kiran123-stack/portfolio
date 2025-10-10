
    const cursor = document.getElementById("cursor");
     const follower = document.querySelector('.cursor-follower');
       let followerX = 0, followerY = 0;


    document.addEventListener("mousemove", (doll)=> {
          cursor.style.transform = `translate3d(${doll.clientX}px, ${doll.clientY}px, 0)`;


    });
        
function animateFollower() {
            followerX += (mouseX - followerX) * 0.1;
            followerY += (mouseY - followerY) * 0.1;
            follower.style.transform = `translate(${followerX}px, ${followerY}px)`;
            requestAnimationFrame(animateFollower);
        }
        animateFollower();


