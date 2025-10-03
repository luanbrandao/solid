import { ReportGeneratorInterface } from "./report-generator-interface";

export class CSVReportGenerator implements ReportGeneratorInterface {
  generate(): string {
    console.log('CSVReportGenerator');
    return '/reports/file.csv';
  }
}