import * as express from 'express'

let superHeroes = [
    {id:1, alias:'Superman', name:'Clark Kent', superpowers:'Flight, super-strength, super-speed, x-ray and heated vision', imgUrl:'http://img.hdwallpaperpc.com/cover/114/Cartoon_Comic_Superman_DC_113060_detail_thumb.jpg'},
    {id:2, alias:'Batman', name:'Bruce Wayne', superpowers:'None, very intelligent and trained in the arts of league of shadows. Master of espionage and detective work', imgUrl:'http://www.paperhi.com/thumbnails/detail/20130429/batman%20dark%20dc%20comics%20costume%20superheroes%20black%20background%20bruce%20wayne_www.paperhi.com_34.jpg'},
    {id:3, alias:'Deadpool', name:'Wade Wilson', superpowers:'Accelerated healing, expert swordsman and marksman', imgUrl:'http://www.fabuloussavers.com/new_wallpaper/Deadpool_Movie_Wallpapers_freecomputerdesktopwallpaper_p.jpg'},
    {id:4, alias:'Iron Man', name:'Tony Stark', superpowers:'Powered armor that grans him superhuman strength and durability, flight, and an array of weapons', imgUrl:'http://www.magnyus.xyz/demo/wallpaper3/wp-content/uploads/sites/10/2016/01/iron-man-8-400x300.jpg'},
    {id:5, alias:'Wolverine', name:'Logan', superpowers:'Accelerated healing, skeleton infused with adamantium', imgUrl:'http://img.hdwallpaperpc.com/cover/101/Cartoon_Comic_Wolverine_X_Men_100344_detail_thumb.jpg'},
    {id:6, alias:'The Flash', name:'Barry Allen', superpowers:'Superhuman speed, can bend time travelling at high speeds', imgUrl:'http://cdn.pastemagazine.com/www/blogs/lists/flash.jpg'},
    {id:7, alias:'Spiderman', name:'', superpowers:'cling to walls, superhuman strength, and a sixth sense', imgUrl:'http://wallpaperclicker.com/storage/Thumb/spiderman-wallpaper-black-79296912.jpg'},
    {id:8, alias:'Hulk', name:'Bruce Banner', superpowers:'Limitless physical strength, fueled by his anger', imgUrl:'http://www.paperhi.com/thumbnails/detail/20130407/green%20hulk%20comic%20character%20movies%20marvel%20comics%20hollywood%20marvel%20the%20incredible%20hulk%20movie%2025_www.paperhi.com_17.jpg'},
    {id:9, alias:'NightWing', name:'Dick Grayson', superpowers:'Highly skilled in martial arts, utilizes high-tech equipment, expert acrobat and aerialist', imgUrl:'http://3.bp.blogspot.com/-sZkfOX316mQ/Ve5uAoS5VVI/AAAAAAAAAPM/Y3_MFZnLbg4/s1600/nightwing1501.jpg'},
    {id:10, alias:'Chuck Norris', name:'Chuck Norris', superpowers:'Everything', imgUrl:'http://martialartsentertainment.com/wp-content/uploads/2011/08/chuck-norris-hd.jpg'},
];
let idCount = 11;

let superHeroRouter = express.Router();

superHeroRouter.get('/', (req,res)=> {
    res.send(superHeroes);
});

superHeroRouter.get('/:id', (req,res)=>{
    let idCount = req.params['id'];

    let filterHero = superHeroes.filter((e)=>{
        return e['id'] == idCount;
    })
    res.send(filterHero[0]);
});

superHeroRouter.post('/', (req,res)=>{
    req.body.id = idCount;
    idCount++;
    superHeroes.push(req.body);
    res.sendStatus(201);
})

superHeroRouter.post('/edit', (req,res)=>{
    let hero = superHeroes.filter((e)=>{
        return e['id'] == req.body.id;
    })[0];

    superHeroes[superHeroes.indexOf(hero)] = req.body;

    res.sendStatus(200);

});

superHeroRouter.delete('/:id', (req,res)=>{
    let heroToDelete = superHeroes.filter((elm)=>{
                return elm['id'] == req.params['id'];
            })[0];
            superHeroes.splice(superHeroes.indexOf(heroToDelete), 1);//you take the index of the array to delete and the 1 is the amount that you delete

            res.sendStatus(200);

});



export default superHeroRouter;
