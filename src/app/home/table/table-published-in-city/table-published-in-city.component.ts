import {Component, inject, OnInit} from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {Publication} from "../../../shared/publication";
import {PublicationService} from "../../../shared/publication.service";
import {Author} from "../../../shared/author";
import {MatList, MatListItem} from "@angular/material/list";
import {NgForOf} from "@angular/common";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";


@Component({
  selector: 'tib-table-published-in-city',
  templateUrl: './table-published-in-city.component.html',
  styleUrl: './table-published-in-city.component.css',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatSortModule, MatListItem, MatList, NgForOf, MatFormField, MatInput]
})
export class TablePublishedInCityComponent implements OnInit {

  publicationsInBerlin: Publication[] = [];

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['SR#', 'PPN', 'Author'];

  ps = inject(PublicationService);

  ngOnInit(): void {
    this.ps.getPublicationData().subscribe({
      next: (response) => {
        this.publicationsInBerlin = response.filter((publication: Publication) => {
          return publication.place?.trim() === "Berlin";
        });
      }
    })
  }

  changeAuthorlist(authorList: Author[]): string[] | undefined {
    let names: string[] = [];

    for (let author of authorList) {
      if (author.author) {
        let splitNames = author.author.split(',');
        if (splitNames.length > 0) {
          names.push(" "+ splitNames[0]);
        }
      }
    }

    return names.length > 0 ? names : undefined;
  }

  applyFilter($event: KeyboardEvent) {

  }
}


