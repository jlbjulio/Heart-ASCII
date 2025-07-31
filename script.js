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
  TTTTT  EEEEE      A    M   M   OOO       M   M   U   U   CCCC   H   H   OOO       M   M  IIIII      A    M   M   OOO   RRRR  
    T    E         A A   MM MM  O   O      MM MM   U   U  C       H   H  O   O     MM MM    I        A A   MM MM  O   O  R   R 
    T    EEEE     AAAAA  M M M  O   O      M M M   U   U  C       HHHHH  O   O     M M M    I       AAAAA  M M M  O   O  RRRR  
    T    E       A     A M   M  O   O      M   M   U   U  C       H   H  O   O     M   M    I      A     A M   M  O   O  R   R 
    T    EEEEE  A       A M   M   OOO       M   M    UUU    CCCC   H   H   OOO      M   M  IIIII   A       A M   M   OOO   R   R 
`;


const dinosaur = `
               __
              / _)
     _.----._/ /
    /         /
 __/ (  | (  |
/__.-'|_|--|_|
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
  container.textContent = scrambledHeart + '\n\n' + message + '\n\n' + dinosaur;
}, 100);
