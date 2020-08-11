import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../../../../core/auth/_services/auth.service';
import {TokenService} from '../../../../../../core/token/token.service';

const MB = 1048576;
const KB = 1024;

@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.scss']
})
export class Step4Component implements OnInit {
  scan: FileType[] = [
    {
      name: null,
      size: null,
      img: null,
      imgSend: null
    },
    {
      name: null,
      size: null,
      img: null,
      imgSend: null
    },
    {
      name: null,
      size: null,
      img: null,
      imgSend: null
    },
  ];
  notificationType = 'hidden-msg';
  notificationText = '';
  constructor(private authService: AuthService, public tokenService: TokenService) { }

  ngOnInit() {
    this.tokenService.getUserByToken().subscribe(res => {
      this.scan[0].img = res.passport_page_1;
      this.scan[1].img = res.passport_page_2;
      this.scan[2].img = res.passport_page_3;
      this.toDataURL(res.passport_page_1, dataUrl => {
        this.scan[0].imgSend = new File([dataUrl], 'passport', {type: 'image/jpeg'});
      });
      this.toDataURL(res.passport_page_1, dataUrl => {
        this.scan[1].imgSend = new File([dataUrl], 'passport', {type: 'image/jpeg'});
      });
      this.toDataURL(res.passport_page_1, dataUrl => {
        this.scan[2].imgSend = new File([dataUrl], 'passport', {type: 'image/jpeg'});
      });
      this.scan[0].name = this.getFileName(this.scan[0].img);
      this.scan[1].name = this.getFileName(this.scan[1].img);
      this.scan[2].name = this.getFileName(this.scan[2].img);
      const req = new XMLHttpRequest();
      req.open('GET', res.passport_page_1, false);
      req.send();
      this.scan[0].size = this.checkSize(+req.getResponseHeader('content-length'));
      req.open('GET', res.passport_page_2, false);
      req.send();
      this.scan[1].size = this.checkSize(+req.getResponseHeader('content-length'));
      req.open('GET', res.passport_page_3, false);
      req.send();
      this.scan[2].size = this.checkSize(+req.getResponseHeader('content-length'));
    });
  }
  getFileName(path: any) {
    if (path && path.replace()) {
      return path.replace(/^.*[\\/]/, '');
    }
    return path;
  }
  checkSize(size: number) {
    let prefix: string;
    if (size > MB) {
      prefix = ' Mb';
      size /= MB;
    } else if (size > KB) {
      prefix = ' Kb';
      size /= KB;
    } else {
      prefix = ' b';
    }
    return (size.toFixed(0) + prefix);
  }
  clearFile(id: number) {
    this.scan[id] = {
      name: null,
      img: null,
      imgSend: null,
      size: null,
    };
  }
  showNotification(type: string, text: string) {
    this.notificationType = type;
    this.notificationText = text;
    setTimeout(() => {
      this.notificationText = '';
      this.notificationType = 'hidden-msg';
    }, 5000);
  }
  saveFiles() {
    const fd = new FormData();
    fd.append('passport_page_1', this.scan[0].imgSend);
    fd.append('passport_page_2', this.scan[1].imgSend);
    fd.append('passport_page_3', this.scan[2].imgSend);
    this.authService.updatePassport(fd).subscribe(res => {
      console.log(res);
      this.showNotification('success-msg', 'Данные отправлены на проверку');
    }, err => {
      let empty = false;
      console.warn(err);
      for (const item of this.scan) {
        if (item.img === null) {
          empty = true;
          break ;
        }
      }
      if (empty) {
        this.showNotification('error-msg', 'Загрузите все сканы');
      } else {
        this.showNotification('error-msg', 'Ошибка, попробуйте позже');
      }
    }, () => {

    });
  }
  toDataURL(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.onload = () => {
      const reader = new FileReader();
      reader.onloadend = () => {
        callback(reader.result);
      };
      reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
  }
  checkLoad(img: any, id: number) {
    if (!img.files[0]) {
      return ;
    }
    if (img.files[0].type.indexOf('image/') === -1) {
      this.showNotification('error-msg', 'Загрузите фотографию формата jpeg или png');
      return ;
    }
    this.scan[id].name = img.files[0].name;
    this.scan[id].size = this.checkSize(img.files[0].size);
    this.scan[id].imgSend = img.files[0];

    const fls = new FileReader();
    fls.readAsDataURL(img.files[0]);
    fls.addEventListener('load', () => {
      this.scan[id].img = fls.result;
    }, false);
  }
  // }
}

interface FileType {
  size: string;
  name: string;
  img: string | ArrayBuffer;
  imgSend: string | Blob;
}
