class Colission {
    constructor (){
    }
    checkAndCollide(){
      //  console.log(enemys, bullets)

        enemys.forEach((enemy, indexEnemy) => {
            bullets.forEach((bullet, indexBullet) => {
                if(bullet.enemy){

                }else{
                    if( bullet.position.y > enemy.position.y &&  bullet.position.y < enemy.position.y + 56  && bullet.position.x > enemy.position.x  && bullet.position.x < enemy.position.x+62){
                        //console.log(bullet, indexBullet)
                        enemy.destroy();
                        bullet.destroy();
                        bullets.splice(indexBullet,1);
                        enemys.splice(indexEnemy,1);
                        if(bullet.from){
                            score[bullet.from]++;
                            document.querySelector('.hid').innerHTML = `score player 1= ${score.plyr1} AND score player 2= ${score.plyr2}`
                        }
                    }
                    //clean up missed bullets
                    if(bullet.position.y <=  0) {
                        bullet.destroy();
                        bullets.splice(indexBullet,1);
                    }
                }
            });
        });
    }
}