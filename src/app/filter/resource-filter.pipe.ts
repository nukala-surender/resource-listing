import { Pipe, PipeTransform, Component, Injectable } from '@angular/core';

import { ResourceFilter } from './resource';

@Pipe({
    name: 'resourceFilter',
    pure: false
})
@Injectable()
export class ResourceFilterPipe implements PipeTransform {

  transform(items: any[], filter: string): any[] {

   if (!items || !filter) {
      return items;
    }
  return items.filter(item => item['path'].toLowerCase().indexOf(filter.toLowerCase()) !== -1);
  }
}
