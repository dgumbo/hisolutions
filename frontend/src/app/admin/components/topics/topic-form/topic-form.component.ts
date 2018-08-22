import { Component, OnInit } from '@angular/core'; 
import {ActivatedRoute} from '@angular/router';
import {TopicService} from 'admin/services/rest/topic.service';
import {AppError } from 'shared/errors/app-error';
import {NotFoundError } from 'shared/errors/not-found-error';
import {Topic} from 'shared/models/topic';

@Component({
  selector: 'app-topic-form',
  templateUrl: './topic-form.component.html',
  styleUrls: ['./topic-form.component.scss']
})
export class TopicFormComponent implements OnInit {
id: string;
    topic: Topic;

    isNewForm: boolean = false;

    constructor(private route: ActivatedRoute
        , private _topicService: TopicService) {


        this.id = this.route.snapshot.paramMap.get('id');
        this.topic = {
            name: ""
        };

        if (this.id) {
            this.getTopic(this.id);
        }
        else {
            this.isNewForm = true;
        }
    }

    ngOnInit() {
    }

    getTopic(topicId) {
        this._topicService.get(topicId)
            //.take(1)
            .subscribe((prod :Topic)=> this.topic = prod);
    }

    saveTopic(topic: Topic) {
        console.log(JSON.stringify(topic));

        if (this.isNewForm) { 
            this._topicService.create(topic)
                .subscribe(prod => {
                    prod=prod;
                    document.location.assign("/topics"); 
                })
                ;
        }
        else {
            this._topicService.update(this.id, topic)
                .subscribe(prod => {
                    prod=prod;
                     document.location.assign("/topics"); 
                });
        }
    }

    deleteTopic(topic) {

        this._topicService.delete(topic)
            .subscribe(() => { 
            },
            (error: AppError) => {
                if (error instanceof NotFoundError)
                    alert('topic has already been deleted.');
                else throw error;
            });
    }
}
