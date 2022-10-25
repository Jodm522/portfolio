


export default function detectHits(player1, player2, player1Projectile, player2Projectile, player1Super,player2Super){

    if (
        (player1.attackBox.position.x + player1.attackBox.width >=
          player2.position.x 
          &&
        player1.attackBox.position.x + player1.attackBox.width <=
          player2.position.x + player2.width
          ||
          player1.position.x - player1.attackBox.width <=
          player2.position.x
          &&
        player1.position.x >=
          player2.position.x
          )     
          &&
        player1.attackBox.position.y + player1.attackBox.height >=
          player2.position.y 
          &&
        player1.attackBox.position.y <= player2.position.y + player2.height 
        &&
        player1.isAttacking
      ) {
        
        player2.takeHit(player1.facing)
        console.log(player2.currentImage)
      }
      // P2 attacks
      if (
        (player2.attackBox.position.x + player2.attackBox.width >=
          player1.position.x 
          &&
        player2.attackBox.position.x + player2.attackBox.width <=
          player1.position.x + player1.width
          ||
          player2.position.x - player2.attackBox.width <=
          player1.position.x
          &&
        player2.position.x >=
          player1.position.x
          )     
          &&
        player2.attackBox.position.y + player2.attackBox.height >=
          player1.position.y 
          &&
        player2.attackBox.position.y <= player1.position.y + player1.height 
        &&
        player2.isAttacking
      ) {
        player1.takeHit(player2.facing)
      }
      if (player2Projectile){
        if (
        (player2Projectile.attackBox.position.x + player2Projectile.attackBox.width >=
          player1.position.x 
          &&
        player2Projectile.attackBox.position.x + player2Projectile.attackBox.width <=
          player1.position.x + player1.width
          ||
          player2Projectile.position.x - player2Projectile.attackBox.width <=
          player1.position.x
          &&
        player2Projectile.position.x >=
          player1.position.x
          )     
          &&
        player2Projectile.attackBox.position.y + player2Projectile.attackBox.height >=
          player1.position.y 
          &&
        player2Projectile.attackBox.position.y <= player1.position.y + player1.height 
      ) {
        player1.takeHit(player2Projectile.facing)
      }
      }
      
    if(player1Projectile){
        if (
            (player1Projectile.attackBox.position.x + player1Projectile.attackBox.width >=
              player2.position.x 
              &&
            player1Projectile.attackBox.position.x + player1Projectile.attackBox.width <=
              player2.position.x + player2.width
              ||
              player1Projectile.position.x - player1Projectile.attackBox.width <=
              player2.position.x
              &&
            player1Projectile.position.x >=
              player2.position.x
              )     
              &&
            player1Projectile.attackBox.position.y + player1Projectile.attackBox.height >=
              player2.position.y 
              &&
            player1Projectile.attackBox.position.y <= player2.position.y + player2.height 
          ) {
            player2.takeHit(player1Projectile.facing)
          }
        

    }

    if(player1Projectile){
      if (
          (player1Projectile.attackBox.position.x + player1Projectile.attackBox.width >=
            player2.position.x 
            &&
          player1Projectile.attackBox.position.x + player1Projectile.attackBox.width <=
            player2.position.x + player2.width
            ||
            player1Projectile.position.x - player1Projectile.attackBox.width <=
            player2.position.x
            &&
          player1Projectile.position.x >=
            player2.position.x
            )     
            &&
          player1Projectile.attackBox.position.y + player1Projectile.attackBox.height >=
            player2.position.y 
            &&
          player1Projectile.attackBox.position.y <= player2.position.y + player2.height 
        ) {
          player2.takeHit(player1Projectile.facing)
        }
      

  }

  if(player1Super){
    if (
        (player1Super.attackBox.position.x + player1Super.attackBox.width >=
          player2.position.x 
          &&
        player1Super.attackBox.position.x + player1Super.attackBox.width <=
          player2.position.x + player2.width
          ||
          player1Super.position.x - player1Super.attackBox.width <=
          player2.position.x
          &&
        player1Super.position.x >=
          player2.position.x
          )     
          &&
        player1Super.attackBox.position.y + player1Super.attackBox.height >=
          player2.position.y 
          &&
        player1Super.attackBox.position.y <= player2.position.y + player2.height 
      ) {
        // player2.takeHit(player1.facing)
        player1Super.onCollide(player1Super, player2)
      }
    

}
if(player2Super){
  if (
      (player2Super.attackBox.position.x + player2Super.attackBox.width >=
        player1.position.x 
        &&
      player2Super.attackBox.position.x + player2Super.attackBox.width <=
        player1.position.x + player1.width
        ||
        player2Super.position.x - player2Super.attackBox.width <=
        player1.position.x
        &&
      player2Super.position.x >=
        player1.position.x
        )     
        &&
      player2Super.attackBox.position.y + player2Super.attackBox.height >=
        player1.position.y 
        &&
      player2Super.attackBox.position.y <= player1.position.y + player1.height 
    ) {
      // player1.takeHit(player2.facing)
      player2Super.onCollide(player2Super,player1)
    }
  

}
}