namespace superhero.Controllers {
    export class AddHeroesController {
        public hero;

        constructor (private superHeroService:superhero.Services.Service,
                    private $state: ng.ui.IStateService){

        }

        saveHero(){
            this.superHeroService.saveHero(this.hero)
            .then(()=>{
                this.$state.go('heroes')
            })
            .catch(()=>{
                console.log('Somthing went wrong')
            })
        }
    }
}
