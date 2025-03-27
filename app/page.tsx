"use client";

import Link from "next/link";

// Metadata needs to be exported from a Server Component, so we move it to layout.tsx
// export const metadata: Metadata = {
//   title: "For My Love ❤️",
//   description: "A special page just for you",
// };

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 to-red-100 dark:from-pink-950 dark:to-red-900 p-4">
      <main className="flex flex-col items-center max-w-3xl w-full text-center">
        <div className="animate-bounce mb-4">
          <svg className="w-10 h-10 text-red-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
          </svg>
        </div>
        
        <h1 className="text-4xl font-bold mb-8 text-red-600 dark:text-red-300">Are you my MAYBE Britney ;)?</h1>
        
        <div className="space-y-6 w-full">
          <Link 
            href="/yes"
            className="block w-full max-w-xs mx-auto py-3 px-6 bg-red-500 hover:bg-red-600 text-white font-bold rounded-full transition-all transform hover:scale-105 shadow-lg"
          >
            Yeah, of course Yash! ❤️
          </Link>
          
          <button 
            id="noButton"
            className="h-14 w-14 flex items-center justify-center bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold rounded-full transition-all shadow-lg mx-auto text-sm"
          >
            No😢
          </button>
        </div>
        
        <div className="mt-16 max-w-md">
          <p className="text-lg text-gray-700 dark:text-gray-300 italic">
            "Love is not about how many days, months, or years you have been together. 
            Love is about how much you love each other every single day."
          </p>
        </div>
        
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {Array.from({ length: 15 }).map((_, i) => (
            <div 
              key={i} 
              className="w-8 h-8 animate-pulse text-red-500"
              style={{ 
                animationDelay: `${i * 0.1}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            >
              ❤️
            </div>
          ))}
        </div>
      </main>
      
      <script dangerouslySetInnerHTML={{ __html: `
        document.addEventListener('DOMContentLoaded', () => {
          const noButton = document.getElementById('noButton');
          
          // Add smooth transition for the button
          noButton.style.transition = 'all 0.3s ease-out';
          
          // Track attempts to touch the button (mobile only)
          let touchAttempts = 0;
          let peekabooInterval = null;
          let isHidden = false;
          
          // Function to move the button to a random position
          function moveButton(event) {
            // Prevent default touch behavior
            if (event.type.includes('touch')) {
              event.preventDefault();
              
              // Increment touch attempts counter (mobile only)
              touchAttempts++;
              
              // After a few attempts, start peek-a-boo mode on mobile
              if (touchAttempts >= 2 && isMobileDevice() && !peekabooInterval) {
                startPeekaboo();
              }
            }
            
            // If button is in peek-a-boo mode, don't do regular movement
            if (isHidden) return;
            
            // Get screen dimensions
            const maxX = window.innerWidth - noButton.offsetWidth;
            const maxY = window.innerHeight - noButton.offsetHeight;
            
            // Get current position
            const currentX = parseInt(noButton.style.left) || noButton.getBoundingClientRect().left;
            const currentY = parseInt(noButton.style.top) || noButton.getBoundingClientRect().top;
            
            // Calculate movement range - smaller on mobile
            const isMobile = isMobileDevice();
            const moveRangeX = isMobile ? 
              Math.min(maxX * 0.3, 150) : // Less movement on mobile
              Math.min(maxX * 0.4, 300);  // Desktop movement
            const moveRangeY = isMobile ? 
              Math.min(maxY * 0.3, 150) : 
              Math.min(maxY * 0.4, 300);
            
            // Calculate new position - move away from touch/cursor position
            let newX, newY;
            
            if (event.type.includes('touch') && event.touches && event.touches[0]) {
              // For touch events, get the touch coordinates
              const touchX = event.touches[0].clientX;
              const touchY = event.touches[0].clientY;
              
              // Move away from touch point
              newX = touchX > currentX ? currentX - moveRangeX : currentX + moveRangeX;
              newY = touchY > currentY ? currentY - moveRangeY : currentY + moveRangeY;
            } else {
              // For mouse events, just move randomly
              newX = currentX + (Math.random() * moveRangeX * 2 - moveRangeX);
              newY = currentY + (Math.random() * moveRangeY * 2 - moveRangeY);
            }
            
            // Keep button on screen with padding
            const padding = isMobile ? 5 : 10; // Smaller padding on mobile
            newX = Math.max(padding, Math.min(newX, maxX - padding));
            newY = Math.max(padding, Math.min(newY, maxY - padding));
            
            // Position the button
            noButton.style.position = 'fixed';
            noButton.style.left = newX + 'px';
            noButton.style.top = newY + 'px';
            noButton.style.opacity = '1';
          }
          
          // Function to check if device is mobile
          function isMobileDevice() {
            return window.innerWidth < 768 || 
                   navigator.maxTouchPoints > 0 || 
                   navigator.msMaxTouchPoints > 0 ||
                   /Android|iPhone|iPad|iPod|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
          }
          
          // Peek-a-boo functionality for mobile devices
          function startPeekaboo() {
            if (peekabooInterval) return; // Already running
            
            // Start the peek-a-boo interval
            peekabooInterval = setInterval(() => {
              if (Math.random() < 0.4) { // 40% chance to trigger peek-a-boo
                if (isHidden) {
                  // Button is hidden, make it peek from a random edge
                  peekFromEdge();
                } else {
                  // Button is visible, hide it
                  hideButton();
                }
              }
            }, 2000); // Check every 2 seconds
          }
          
          // Hide the button off-screen
          function hideButton() {
            isHidden = true;
            noButton.style.transition = 'all 0.5s ease-out';
            
            // Move off-screen
            const offScreenX = -100;
            const offScreenY = -100;
            
            noButton.style.left = offScreenX + 'px';
            noButton.style.top = offScreenY + 'px';
            noButton.style.opacity = '0';
          }
          
          // Make the button peek from a random edge
          function peekFromEdge() {
            isHidden = false;
            
            // Get screen dimensions
            const maxX = window.innerWidth - noButton.offsetWidth;
            const maxY = window.innerHeight - noButton.offsetHeight;
            
            // Choose a random edge: 0=top, 1=right, 2=bottom, 3=left
            const edge = Math.floor(Math.random() * 4);
            let peekX, peekY;
            
            switch(edge) {
              case 0: // Top edge
                peekX = Math.random() * maxX;
                peekY = 0;
                break;
              case 1: // Right edge
                peekX = maxX;
                peekY = Math.random() * maxY;
                break;
              case 2: // Bottom edge
                peekX = Math.random() * maxX;
                peekY = maxY;
                break;
              case 3: // Left edge
                peekX = 0;
                peekY = Math.random() * maxY;
                break;
            }
            
            // Apply peek animation
            noButton.style.transition = 'all 0.3s ease-out';
            noButton.style.left = peekX + 'px';
            noButton.style.top = peekY + 'px';
            noButton.style.opacity = '1';
          }
          
          // Mouse events (desktop)
          noButton.addEventListener('mouseover', moveButton);
          noButton.addEventListener('click', moveButton);
          
          // Touch events (mobile)
          noButton.addEventListener('touchstart', moveButton, { passive: false });
          noButton.addEventListener('touchend', moveButton, { passive: false });
          
          // Initial position - needed for mobile
          window.addEventListener('load', () => {
            // Small delay to ensure the button is rendered
            setTimeout(() => {
              // Store initial position for mobile first touch
              const rect = noButton.getBoundingClientRect();
              noButton.style.position = 'fixed';
              noButton.style.left = rect.left + 'px';
              noButton.style.top = rect.top + 'px';
              
              // Start peek-a-boo for mobile only
              if (isMobileDevice()) {
                // Add a teasing message for mobile users
                const messageEl = document.createElement('div');
                messageEl.className = 'mt-4 text-sm text-pink-600 dark:text-pink-400 animate-pulse';
                messageEl.textContent = 'Catch me if you can! 😜';
                noButton.parentNode.appendChild(messageEl);
                
                // Small delay before starting peek-a-boo
                setTimeout(() => {
                  startPeekaboo();
                }, 3000); // Start peek-a-boo after 3 seconds
              }
            }, 100);
          });
        });
      `}} />
    </div>
  );
}
