namespace superhero.Controllers {
    export class HeroesController {
        public heroes;
        public hero;

        constructor(private superHeroService:superhero.Services.Service,
                    private $uibModal: ng.ui.bootstrap.IModalService){
                this.getHeroes();
        }

        getHeroes(){
        this.heroes = this.superHeroService.getSuperHeroes();
    }
    getHero(heroId){
        this.hero = this.superHeroService.getSuperHero({id: heroId});
    }
    getHeroDetails(id){
        this.$uibModal.open({
            templateUrl: '/ngApp/views/heroDetails.html',
            controller: superhero.Controllers.DetailsController,
            controllerAs:'controller',
            resolve: {
                heroId: ()=> id,
            },
            size: 'md'
        }).result.then((data)=>{

                if(data.hasBeenEdited == true){
                    this.getHeroes();
                    
                }
        })
    }
    }

}
