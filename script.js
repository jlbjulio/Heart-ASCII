const heart = `
        ********       ********        
     ************   ************     
   **************** ***************   
  **********************************  
 ************************************ 
 ************************************ 
  **********************************  
   *******************************    
     ***************************      
       ***********************        
         *******************          
           ***************            
             ***********              
               *******                
                 ***                  
`;

const message = `
  TTTTT  EEEEE      A    M   M   OOO       M   M   U   U   CCCC   H   H   OOO  
    T    E         A A   MM MM  O   O      MM MM   U   U  C       H   H  O   O 
    T    EEEE     AAAAA  M M M  O   O      M M M   U   U  C       HHHHH  O   O 
    T    E       A     A M   M  O   O      M   M   U   U  C       H   H  O   O 
    T    EEEEE  A       A M   M   OOO       M   M    UUU    CCCC   H   H   OOO  
`;

function randomizeText(text) {
  const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890+=-_";
  return text.split('').map(char => {
    return char === ' ' || char === '\n' ? char : charset[Math.floor(Math.random() * charset.length)];
  }).join('');
}

const container = document.getElementById('ascii-heart');

// Animar solo el corazón
setInterval(() => {
  const scrambledHeart = randomizeText(heart);
  container.textContent = scrambledHeart + '\n\n' + message;
}, 100);
