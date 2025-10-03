import { ReportGeneratorInterface } from "./report-generator-interface";
import fs from 'fs'
import { S3ReportGenerator } from "./s3-report-generator";
export class TestReportProcessor {

  process(reportGenerator: ReportGeneratorInterface): void {
    const path = reportGenerator.generate()

    // geralmente fazemos assim, porém não é a forma correta!
    // if (reportGenerator instanceof S3ReportGenerator) {}
    // resolve isso com o interface-segregation

    // vai gerar um erro pois o s3 retornar uma URL e esperamos o caminho de um arquivo.
    if (fs.existsSync(path) === false) {
      throw new Error('O arquivo não existe')
    }

    // Lógica para processar o arquivo
  }

}