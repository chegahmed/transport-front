import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {Subscription} from 'rxjs';
import {LoadingScreenService} from '../service/loading-screen.service';

@Component({
    selector: 'app-loading-screen',
    templateUrl: './loading-screen.component.html',
    styleUrls: ['./loading-screen.component.less'],
})
export class LoadingScreenComponent implements OnInit, OnDestroy {

    loading: boolean = false;
    loadingSubscription: Subscription;
    constructor (private loadingScreenService: LoadingScreenService) {
    }

    ngOnInit () {
        this.loadingSubscription = this.loadingScreenService.loadingStatus.subscribe((value: boolean) => {
            this.loading = value;
            // console.log('>>> LOADING SUBSCRIPTION : ' + value);
        });
    }

    ngOnDestroy (): void {
        this.loadingSubscription.unsubscribe();
    }
}
