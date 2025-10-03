import { ReportGeneratorInterface } from "./report-generator-interface";

export class PDFReportGenerator implements ReportGeneratorInterface {
  generate(): string {
    console.log('PDFReportGenerator');
    return '/reports/file.pdf'
  }
}