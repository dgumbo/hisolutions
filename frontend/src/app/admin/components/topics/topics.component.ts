import { Component, OnInit } from '@angular/core'; 
import {TopicService} from 'shared/services/rest/topic.service';
import {NotFoundError } from 'shared/components/error-pages/not-found-error';
import {AppError } from 'shared/components/error-pages/app-error';
import {Topic} from 'shared/models/topic';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.scss']
})
export class TopicsComponent implements OnInit {

     topics: Topic[]; 

    constructor(private _topicService: TopicService ) {}

    ngOnInit() {
        this.getTopics(); 
    } 

    getTopics  () {
        this._topicService.getAll().subscribe((prods :Topic[])=> this.topics = prods);
    }

    deleteTopic(topic) {

        this._topicService.delete(topic)
            .subscribe( () => {
                const index = this.topics.indexOf(topic);
                this.topics.splice(index, 1);
            },
            (error: AppError) => {
                if (error instanceof NotFoundError)
                    alert('topic has already been deleted.');
                else throw error;
            }); 
    }

}
