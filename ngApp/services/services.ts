namespace superhero.Services {
    export class Service {
        private heroResources;

        constructor($resource: ng.resource.IResourceService){
            this.heroResources = $resource('api/superHero/:id', null, {
                edit:{
                    method:'POST',
                    url: 'api/superHero/edit'
                }
            });
        }
        saveHero(hero){
            return this.heroResources.save(hero).$promise;
        }
        editHero(hero){
            return this.heroResources.edit(hero).$promise;
        }
         getSuperHeroes(){
            return this.heroResources.query();
        }

         getSuperHero(heroId){
            return this.heroResources.get({id: heroId});
        }

        deleteHero(heroId){
            return this.heroResources.delete({id: heroId}).$promise;
        }
    }
    angular.module('superhero').service('superHeroService', Service);
}
