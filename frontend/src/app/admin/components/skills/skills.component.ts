import { Component, OnInit } from '@angular/core';
import {SkillService} from 'admin/services/rest/skill.service';
import {NotFoundError } from 'shared/errors/not-found-error';
import {AppError } from 'shared/errors/app-error';
import {Skill} from 'shared/models/skill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

     skills: Skill[]; 

    constructor(private _skillService: SkillService ) {}

    ngOnInit() {
        this.getSkills(); 
    } 

    getSkills  () {
        this._skillService.getAll().subscribe((prods :Skill[])=> this.skills = prods);
    }

    deleteSkill(skill) {

        this._skillService.delete(skill)
            .subscribe( () => {
                const index = this.skills.indexOf(skill);
                this.skills.splice(index, 1);
            },
            (error: AppError) => {
                if (error instanceof NotFoundError)
                    alert('skill has already been deleted.');
                else throw error;
            }); 
    }

}
