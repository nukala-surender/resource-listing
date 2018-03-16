import { Pipe, PipeTransform } from '@angular/core';

import { ResourceFilter } from './resource';

@Pipe({
    name: 'resourceFilter',
    pure: false
})
export class ResourceFilterPipe implements PipeTransform {
  transform(items: ResourceFilter[], filter: ResourceFilter): ResourceFilter[] {
    if (!items || !filter) {
      return items;
    }
    // filter items array, items which match and return true will be kept, false will be filtered out
    return items.filter((item: ResourceFilter) => this.applyFilter(item, filter));
  }

  /**
   * Perform the filtering.
   *
   * @param {Resource} book The book to compare to the filter.
   * @param {Resource} filter The filter to apply.
   * @return {boolean} True if book satisfies filters, false if not.
   */
  applyFilter(book: ResourceFilter, filter: ResourceFilter): boolean {
    for (let field in filter) {
      if (filter[field]) {
        if (typeof filter[field] === 'string') {
          if (book[field].toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
            return false;
          }
        } else if (typeof filter[field] === 'number') {
          if (book[field] !== filter[field]) {
            return false;
          }
        }
      }
    }
    return true;
  }
}
