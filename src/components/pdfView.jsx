import { Document, Page } from 'react-pdf';

function PDFThumbnail() {
    const pdfUrl = require('../../public/divida-ativa.pdf');
  return (
    <Document file={pdfUrl}>
      <Page pageNumber={1} width={100} />
    </Document>
  );
}

export default PDFThumbnail;
