
    const cursor = document.getElementById("cursor");

    document.addEventListener("mousemove", (doll)=> {
          cursor.style.transform = `translate3d(${doll.clientX}px, ${doll.clientY}px, 0)`;


    });
        


