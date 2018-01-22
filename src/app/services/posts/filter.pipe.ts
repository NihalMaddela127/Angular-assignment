import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(pagedItems: any, searchText: any): any {
if(searchText === undefined) return pagedItems;   
    return pagedItems.filter(function(servicePipe){
      return servicePipe.title.toLowerCase().includes(searchText.toLowerCase());
    //    ||
    //   servicePipe.Branch.toLowerCase().includes(searchText.toLowerCase()) ||
    //   servicePipe.College.toLowerCase().includes(searchText.toLowerCase()) ||
    //   servicePipe.Percentage.toLowerCase().includes(searchText.toLowerCase());
    })
  }

}
