import { LightningElement,api,wire } from 'lwc';
import getCase from '@salesforce/apex/StatusUpdate.getContact';
import updateCaseStatus from '@salesforce/apex/StatusUpdate.updateStatus';
import {refreshApex} from '@salesforce/apex';
 
const chunk = (arr, size) => {
    const chunkedArray = [];
    for (let i = 0; i < arr.length; i++) {
       const last = chunkedArray[chunkedArray.length - 1];
       if(!last || last.length === size){
          chunkedArray.push([arr[i]]);
       }else{
          last.push(arr[i]);
       }
    };
    return chunkedArray;
};

export default class PagenationUpdate extends LightningElement {
    caselist1;
    RefreshData;
    currentPage="1";
    statusvalue;
    caselist=[];
    error;
    @api caseChunks;
    caseToDisplay;
    totalPages;
    disableNext=false;
    disablePrev=true;
    pageOptions=[];
    size;
    connectedRes=[];
    totalRecords;
    pageLimit="10";
    get options() {
        return [
            { label: 'New', value: 'new' },
            { label: 'Working', value: 'Working' },
            { label: 'Escalated', value: 'Escalated' },
            { label: 'Closed', value: 'Closed' }
        ];
    }

    columns = [
        { label: 'Case ID', fieldName: 'CaseNumber' },
        { label: 'Subject', fieldName: 'Subject', editable: true},
        { label: 'Status', fieldName: 'Status', editable: true},
        { label: 'Created Date', fieldName: 'CreatedDate',  type: "date-local", editable: true,
        typeAttributes:{
            month: "2-digit",
            day: "2-digit"
        } },
   
    ];
 
    //get options for the limit dropdown
    get pageLimitOptions() {
        var pageLimitList = [
            { label: '10', value: '10' },
            { label: '15', value: '15' },
            { label: '20', value: '20' },
            { label: '50', value: '50' },
            { label: '100', value: '100' },
        ];
        return pageLimitList;
    }

    @wire(getCase)    
    wiredgetCase(result) {
        const { data, error } = result;  
            this.RefreshData = result;
            console.log(this.RefreshData);      
            if (data) {            
            this.caseList = data;
            this.error=undefined;
            this.setPagination(10);          
            }
            else if(error){
                console.log(error);
            }  
        }

 
    setPagination(size)
    {
        if(this.caseList.length > 0)
        {
            this.disableNext=false;
            this.disablePrev=true;
            this.size=size;
            this.currentPage="1";
            this.totalRecords=this.caseList.length;
            this.caseChunks=chunk(this.caseList, this.size);
            this.caseToDisplay=this.caseChunks[0];
            this.totalPages=this.caseChunks.length;
            var pageOptObj={};
            for(var i=1; i<= this.totalPages; i++)
            {
                pageOptObj={};
                pageOptObj.label=i.toString();
                pageOptObj.value=i.toString();
                this.pageOptions.push(pageOptObj);
            }
            this.calculatePageText();
        }
    }
 
    calculatePageText()
    {
        var end=(parseInt(this.currentPage) * this.size) > this.totalRecords ? this.totalRecords : (parseInt(this.currentPage) * this.size);
        this.pageParam=((parseInt(this.currentPage) * this.size) - (this.size-1))+' to '+end;
    }
 
    handleNext()
    {
        this.currentPage=(parseInt(this.currentPage)+1).toString();
 
        if(parseInt(this.currentPage) >= this.totalPages)
        {
            this.currentPage=this.totalPages.toString();
            this.disableNext=true;
            this.disablePrev=false;
        }
        else
        {
            this.disableNext=false;
            this.disablePrev=false;
        }
 
        this.caseToDisplay=this.caseChunks[parseInt(this.currentPage)-1];
        this.calculatePageText();
    }
 
    handlePrev()
    {
        this.currentPage=(parseInt(this.currentPage)-1).toString();
 
        if(parseInt(this.currentPage) <= "1")
        {
            this.currentPage="1";
            this.disableNext=false;
            this.disablePrev=true;
        }
        else
        {
            this.disableNext=false;
            this.disablePrev=false;
        }
 
        this.caseToDisplay=this.caseChunks[parseInt(this.currentPage)-1];
        this.calculatePageText();
    }
 
    handlePageChange(event)
    {
        this.currentPage=event.target.value;
        this.caseToDisplay=this.caseChunks[parseInt(this.currentPage)-1];
        if(parseInt(this.currentPage) <= "1")
        {
            this.disableNext=false;
            this.disablePrev=true;
        }
        else if(parseInt(this.currentPage) >= this.totalPages)
        {
            this.disableNext=true;
            this.disablePrev=false;
        }
        else
        {
            this.disableNext=false;
            this.disablePrev=false;
        }
        this.calculatePageText();
    }
 
    handleFirst()
    {
        this.currentPage="1";
        this.disableNext=false;
        this.disablePrev=true;
        this.caseToDisplay=this.caseChunks[parseInt(this.currentPage)-1];
        this.calculatePageText();
    }
 
    handleLast()
    {
        this.currentPage=this.totalPages.toString();
        this.disableNext=true;
        this.disablePrev=false;
        this.caseToDisplay=this.caseChunks[parseInt(this.currentPage)-1];
        this.calculatePageText();
    }
 
    handleLimitChange(event) {
        this.pageLimit = event.detail.value;
        this.selectedPage='1';
        this.size = parseInt(this.pageLimit)
        this.setPagination(this.size); //invoking the pagination logic
        //this.calculatePageText();
    }
 
    handleRowAction(event) {
        const actionName = event.detail.action.name;
        const row = event.detail.row;
        switch (actionName) {
            case 'edit':
                //this.showRowDetails(row);
                break;
            case 'cancel':
                //this.showRowDetails(row);
                break;
            default:
        }
    }
    handleChange(event){
        this.statusvalue= event.detail.value;
    }
    updateStatus(){
        this.caselist = this.template.querySelector('lightning-datatable').getSelectedRows();
        updateCaseStatus({statusValue: this.statusvalue, caseList: this.caselist})
       // window.open('url','_self');
       // document.location.reload(true);
            .then(result => {
                //this.caseList = result;
                return this.refresh();
            })
            .catch(error => {
                this.error = error;
            });
    }
    async refresh(){
        //this.connectedRes ={caseList, error};
       await refreshApex(this.RefreshData);
    }
}