// Select the buttons
const copyButton2 = document.getElementById('copyIP2');
let tooltip;

// Tooltip for "mc.razermc.online"
copyButton2.addEventListener('mouseenter', function() {
    tooltip = document.createElement('div');
    tooltip.textContent = '*only for Radmin users*';
    tooltip.style.position = 'absolute';
    tooltip.style.backgroundColor = '#000000b3';
    tooltip.style.color = '#00ff00';
    tooltip.style.padding = '5px';
    tooltip.style.borderRadius = '5px';
    tooltip.style.fontSize = '12px';
    tooltip.style.zIndex = '1000';
    tooltip.style.top = '30px'; // Adjust top position relative to the button
    tooltip.style.left = '0';   // Adjust left position relative to the button

    document.body.appendChild(tooltip);

    const rect = copyButton2.getBoundingClientRect();
    tooltip.style.left = `${rect.left}px`;
    tooltip.style.top = `${rect.top + rect.height + 1}px`; // Position 5px below the button
});

copyButton2.addEventListener('mouseleave', function() {
    if (tooltip) {
        tooltip.remove();
    }
});

const changeSkinButton = document.getElementById('changeSkinButton');


// Event listener for showing tooltip on hover
changeSkinButton.addEventListener('mouseenter', function() {
    // Create the tooltip element
    tooltip = document.createElement('div');
    tooltip.innerHTML = '❆ download the mod: CustomSkinLoader<br>❆ use same Username';
    tooltip.style.position = 'absolute';
    tooltip.style.backgroundColor = '#000000b3';
    tooltip.style.color = '#00ff00';
    tooltip.style.padding = '5px';
    tooltip.style.borderRadius = '5px';
    tooltip.style.fontSize = '12px';
    tooltip.style.zIndex = '1000';
    tooltip.style.top = '30px'; // Adjust top position relative to the button
    tooltip.style.left = '0';   // Adjust left position relative to the button

    document.body.appendChild(tooltip);

    // Get the position of the "Change Skin" button
    const rect = changeSkinButton.getBoundingClientRect();
    tooltip.style.left = `${rect.left}px`;
    tooltip.style.top = `${rect.top + rect.height + 3}px`; // Position below the button
});

// Event listener for removing tooltip when mouse leaves
changeSkinButton.addEventListener('mouseleave', function() {
    if (tooltip) {
        tooltip.remove();
    }
});

  // music -----------------------------------------
  
  document.addEventListener('DOMContentLoaded', function() {
    // Create audio element
    const backgroundMusic = document.createElement('audio');
    backgroundMusic.src = '1.mp3'; // Replace with actual music file path
    backgroundMusic.loop = true;
    backgroundMusic.volume = 0.1; // Set a reasonable volume
    backgroundMusic.muted = true; // Start muted
  
    // Mute and Unmute SVG icons
    const muteIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(255, 255, 255, 1);transform: ;msFilter:;"><path d="m21.707 20.293-2.023-2.023A9.566 9.566 0 0 0 21.999 12c0-4.091-2.472-7.453-5.999-9v2c2.387 1.386 3.999 4.047 3.999 7a8.113 8.113 0 0 1-1.672 4.913l-1.285-1.285C17.644 14.536 18 13.19 18 12c0-1.771-.775-3.9-2-5v7.586l-2-2V4a1 1 0 0 0-1.554-.832L7.727 6.313l-4.02-4.02-1.414 1.414 18 18 1.414-1.414zM12 5.868v4.718L9.169 7.755 12 5.868zM4 17h2.697l5.748 3.832a1.004 1.004 0 0 0 1.027.05A1 1 0 0 0 14 20v-1.879l-2-2v2.011l-4.445-2.964c-.025-.017-.056-.02-.082-.033a.986.986 0 0 0-.382-.116C7.059 15.016 7.032 15 7 15H4V9h.879L3.102 7.223A1.995 1.995 0 0 0 2 9v6c0 1.103.897 2 2 2z"></path></svg>`;
    
    const unmuteIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(255, 255, 255, 1);transform: ;msFilter:;"><path d="M16 21c3.527-1.547 5.999-4.909 5.999-9S19.527 4.547 16 3v2c2.387 1.386 3.999 4.047 3.999 7S18.387 17.614 16 19v2z"></path><path d="M16 7v10c1.225-1.1 2-3.229 2-5s-.775-3.9-2-5zM4 17h2.697l5.748 3.832a1.004 1.004 0 0 0 1.027.05A1 1 0 0 0 14 20V4a1 1 0 0 0-1.554-.832L6.697 7H4c-1.103 0-2 .897-2 2v6c0 1.103.897 2 2 2zm0-8h3c.033 0 .061-.016.093-.019a1.027 1.027 0 0 0 .38-.116c.026-.015.057-.017.082-.033L12 5.868v12.264l-4.445-2.964c-.025-.017-.056-.02-.082-.033a.986.986 0 0 0-.382-.116C7.059 15.016 7.032 15 7 15H4V9z"></path></svg>`;
  
    // Create mute toggle button
    const musicToggle = document.createElement('button');
    musicToggle.classList.add('music-toggle');
    musicToggle.innerHTML = muteIcon; // Start with mute icon
  
    // Position the toggle button
    musicToggle.style.position = 'fixed';
    musicToggle.style.left = '1rem';
    musicToggle.style.top = '50%';
    musicToggle.style.transform = 'translateY(-50%)';
    musicToggle.style.zIndex = '1000';
    musicToggle.style.background = 'rgba(0, 0, 0, 0.75)';
    musicToggle.style.border = 'none';
    musicToggle.style.borderRadius = '50%';
    musicToggle.style.padding = '0.5rem';
    musicToggle.style.cursor = 'pointer';
  
    // Add event listener to toggle music
    let isMuted = true; // Start as muted
    musicToggle.addEventListener('click', function() {
        if (isMuted) {
            backgroundMusic.muted = false;
            musicToggle.innerHTML = unmuteIcon;
            
            // If music is not playing, start from the beginning
            if (backgroundMusic.paused) {
                backgroundMusic.currentTime = 0;
                backgroundMusic.play();
            }
        } else {
            backgroundMusic.muted = true;
            musicToggle.innerHTML = muteIcon;
        }
        isMuted = !isMuted;
    });
  
    // Append elements to body
    document.body.appendChild(backgroundMusic);
    document.body.appendChild(musicToggle);
  
    // Attempt to autoplay when page loads
    backgroundMusic.play().catch(e => {
        console.log('Autoplay was prevented', e);
    });
  });




