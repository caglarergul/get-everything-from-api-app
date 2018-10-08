import React, {Component} from 'react';

class BankAccount extends Component {
    render() {
        return (
            <div>
                <h1>Banka Hesap Bilgilerimiz</h1>
                <strong>GARANTİ BANKASI Hesap Bilgileri</strong><br />
                ŞUBE: Toptancılar Çarşı<br />
                ŞUBE KODU: 269<br />
                HESAP NO: 6293882<br />
                IBAN: TR 98 0006 2000 2690 0006 2938 82
            </div>
        );
    }
}

export default BankAccount;