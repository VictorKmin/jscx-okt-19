module.exports = {
  MAX_PHOTO_SIZE: 5 * 1024 * 1024,
  MAX_DOC_SIZE: 10 * 1024 * 1024,

  PHOTO_MIMETYPES: ['image/gif', 'image/jpeg', 'image/pjpeg', 'image/png', 'image/webp'],
  DOC_MIMETYPES: [
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document', //docx
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', //.xls
    'application/vnd.ms-excel', // new exel format
    'application/msword', //doc
    'application/pdf'
  ]
}
