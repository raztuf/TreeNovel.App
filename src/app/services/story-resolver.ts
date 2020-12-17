import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { FStory } from '../models/content.model';
import { StoryService } from './story.service';

@Injectable({
    providedIn: 'root'
})

export class StoryResolver implements Resolve<FStory> {

    constructor(
        private service : StoryService
    ){}

    resolve(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot
        ): FStory | Observable<FStory> | Promise<FStory> {
        return this.service.getOne(parseInt(route.paramMap.get('id')));
    }

}