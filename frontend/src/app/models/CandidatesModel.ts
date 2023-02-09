export class CandidatesModel {
    constructor(
        
        public name: string,
        public languagesId:number,
        public lastUpdateDate: Date,
        public languageName:string,
        public seniority: string,
        public beginYear?: number,
        public CandidatesId?: number,
    ) { }
}