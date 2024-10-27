const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 64 * 16 // 1024
canvas.height = 64 * 9 //576

const collBlocks = [] 

const parsedCollisions = col1.parse2D()
const collisionBlocks =  parsedCollisions.createObjectFrom2D()
const bkgLvl1 = new Sprite({
    position:{
        x: 0,
        y: 0
    },
    imageSrc: './assets_game2/img/backgroundLevel1.png'
})

//Player 
const player = new Player()

const keys = {
    w: {
        pressed: false
    },
    a:{
        pressed: false
    },
    d:{
        pressed: false
    }
}
let lastKey
function animate(){
    window.requestAnimationFrame(animate)
    bkgLvl1.draw()
    collBlocks.forEach(Coliision => {
        Coliision.draw()
    })
    player.velocity.x = 0
    if(keys.a.pressed && lastKey === 'a' ){
        player.velocity.x = -5
    }else if (keys.d.pressed && lastKey === 'd'){
        player.velocity.x = 5
    }
    player.draw()
    player.update()
  

}

 animate()