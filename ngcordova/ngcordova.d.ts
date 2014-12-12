/// <reference path="../angularjs/angular.d.ts" />

declare module ngcordova {
    export interface ICordovaToastService {
        show(message: string, duration: string, position: string): ng.IPromise<any>;
        showLongBottom(message: string): ng.IPromise<any>;
    }

    export interface ISocialSharingService {
        share(message: string, message: string, file: string, link: string)
            : ng.IPromise<any>;

        shareViaTwitter(message: string, image: string, link: string)
            : ng.IPromise<any>;

        shareViaWhatsApp(message: string, image: string, link: string)
            : ng.IPromise<any>;
            
        shareViaFacebook(message: string, image: string, link: string)
            : ng.IPromise<any>;

        shareViaSMS(message: string, number: number): ng.IPromise<any>;

        shareViaEmail(message: string, subject: string, toArr: Array<string>, 
            bccArr: Array<string>, file: string): ng.IPromise<any>;

        canShareVia(socialType: string, message: string, image: string, 
            link: string): ng.IPromise<any>;
    }
}      
