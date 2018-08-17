import { Component, OnInit } from '@angular/core';
import {AppError } from 'shared/components/error-pages/app-error';
import {NotFoundError } from 'shared/components/error-pages/not-found-error';
import {SkillService} from 'admin/services/rest/skill.service';
import {ActivatedRoute} from '@angular/router';
import {Skill} from 'shared/models/skill';

@Component({
  selector: 'app-skill-form',
  templateUrl: './skill-form.component.html',
  styleUrls: ['./skill-form.component.scss']
})
export class SkillFormComponent implements OnInit {
id: string;
    skill: Skill;

    isNewForm: boolean = false;

    constructor(private route: ActivatedRoute
        , private _skillService: SkillService) {


        this.id = this.route.snapshot.paramMap.get('id');
        this.skill = {
            name: ""
        };

        if (this.id) {
            this.getSkill(this.id);
        }
        else {
            this.isNewForm = true;
        }
    }

    ngOnInit() {
    }

    getSkill(skillId) {
        this._skillService.get(skillId)
         //   .take(1)
            .subscribe((prod :Skill)=> this.skill = prod);
    }

    saveSkill(skill: Skill) {
        console.log(JSON.stringify(skill));

        if (this.isNewForm) { 
            this._skillService.create(skill)
                .subscribe( () => {
                    document.location.assign("/skills"); 
                })
                ;
        }
        else {
            this._skillService.update(this.id, skill)
                .subscribe( () => {
                     document.location.assign("/skills"); 
                });
        }
    }

    deleteSkill(skill) {

        this._skillService.delete(skill)
            .subscribe(() => { 
            },
            (error: AppError) => {
                if (error instanceof NotFoundError)
                    alert('skill has already been deleted.');
                else throw error;
            });
    }
}
