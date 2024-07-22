import { Component, inject, OnInit,} from '@angular/core';
import {Publication} from "../../../shared/publication";
import {PublicationService} from "../../../shared/publication.service";
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef,
  MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";


export interface PubPerYearItem {
  Year: number;
  Counts: number;
}

@Component({
  selector: 'tib-table-pub-per-year',
  templateUrl: './table-pub-per-year.component.html',
  styleUrl: './table-pub-per-year.component.css',
  standalone: true,

  imports: [
    MatTable,
    MatHeaderCell,
    MatColumnDef,
    MatCell,
    MatHeaderRow,
    MatRow,
    MatHeaderCellDef,
    MatCellDef,
    MatHeaderRowDef,
    MatRowDef
  ]
})

export class TablePubPerYearComponent implements OnInit{
  public publications: Publication[] = [];
  publicationsByYear: PubPerYearItem[] = [];

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['year', 'counts'];
  ps = inject(PublicationService);


  ngOnInit(): void {
    this.ps.getPublicationData().subscribe({
      next: (response: Publication[]) => {
        this.publications = response;
        this.publicationsByYear = this.countPublicationsByYear(response);
        console.log(this.publicationsByYear);
       }
    })
  }

  countPublicationsByYear(publications: Publication[]) {
    let yearCounts:Map<number, number> = new Map();
    let result: PubPerYearItem[] = [];

    for (let publication of publications) {
      let year = parseInt(<string>publication['publication date'] );
      yearCounts.set(year, (yearCounts.get(year) || 0) + 1);
    }

    for (let [year, count] of yearCounts) {
      let pubYear = { "Year": year, "Counts": count };
      result.push(pubYear);
    }

    return result;
  };


}
