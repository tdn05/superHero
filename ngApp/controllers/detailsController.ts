namespace superhero.Controllers {
    export class DetailsController {
        public hero;
        public isEditMode;
        private hasBeenEdited;

        constructor(public heroId, private superHeroService:superhero.Services.Service,
                private $uibModalInstance: ng.ui.bootstrap.IModalServiceInstance){

            this.getHero();
            this.isEditMode = false;
            this.hasBeenEdited = false;
        }

        closeModal(){
            this.$uibModalInstance.close({hasBeenEdited:this.hasBeenEdited});
        }

        toggleEditMode(){
            this.isEditMode = !this.isEditMode;
        }
        getHero(){
            this.hero = this.superHeroService.getSuperHero(this.heroId);
        }
        saveHero(){
            this.superHeroService.editHero(this.hero)
            .then(()=>{
                this.toggleEditMode();
                this.hasBeenEdited = true;
            })
            .catch(()=>{
                console.log('Something went wrong...')
            });
        }


        cancelSave(){
            this.getHero();
            this.toggleEditMode();

        }
        deleteHero(){
            this.superHeroService.deleteHero(this.heroId)
            .then(()=>{
                this.hasBeenEdited = true;
                this.closeModal();
            })
            .catch(()=>{
                console.log('something went wrong')
            })
        }
    }
}
