<template>
    <div class="wallets">
        <div v-for="(mentor, index) in loggedUser.mentors" class="wallet-row">
            <div class="wallet-col wallet-col-index">{{ index + 1 }}</div>
            <div class="wallet-col wallet-col-number" :id="`wallet-id-${index}`">{{ mentor.wallet }}</div>
            <div class="wallet-col wallet-col-copy">
                <button type="button" class="btn btn-icon btn-icon-copy-wallet-number btn-sm" @click="handleCopyToClipboard(index)" title="Скопировать"></button>
                <button
                    type="button"
                    title="Показать QR-код"
                    @click="handleShowQRCode(mentor.id, mentor.wallet)"
                    :class="{
                        'btn btn-icon-qr-code btn-sm': true,
                        'btn-icon-qr-code-showing': QRCodeShowingProcessInfo.sendingStatus && QRCodeShowingProcessInfo.mentorId === mentor.id
                }">
                    <span class="glyphicon glyphicon-qrcode" v-if="!QRCodeShowingProcessInfo.sendingStatus || QRCodeShowingProcessInfo.mentorId !== mentor.id"></span>
                </button>
                <div :id="`qr-code-container-${mentor.id}`" class="qr-code-container">
                    <div class="modal-content">
                        <div class="modal-body"></div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-success" @click="handleCloseQRCode(mentor.id)">Закрыть</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="wallet-col wallet-col-confirmation">
                <button
                    type="button"
                    v-if="!mentor.confirmationSent"
                    @click="handleSendRemittanceConfirmation(mentor.id)"
                    :class="{
                        'btn btn-icon btn-icon-confirm-by-email btn-sm': true,
                        'btn-icon-confirmation-sending-by-email': remittanceConfirmationSendingProcessInfo.sendingStatus && remittanceConfirmationSendingProcessInfo.mentorId === mentor.id
                }" >Подтвердить</button>

                <span v-if="mentor.confirmationSent && !mentor.confirmed" class="confirmation-sent">
                    <span class="glyphicon glyphicon-ok-circle"></span>
                    <span>Подтверждение отправлено. <a href="#" :class="{
                        'confirmation-repeat': true,
                        'confirmation-repeat-loading': remittanceConfirmationSendingProcessInfo.sendingStatus && remittanceConfirmationSendingProcessInfo.mentorId === mentor.id
                    }" @click.prevent="handleSendRemittanceConfirmation(mentor.id)">Повторить</a></span>
                </span>

                <span v-if="mentor.confirmed" class="confirmation-sent">
                    <span class="glyphicon glyphicon-ok-sign"></span>
                    <span>Подтверждение получено</span>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: 'level-step-wallets',
        computed: mapGetters([
            'loggedUser',
            'QRCodeShowingProcessInfo',
            'remittanceConfirmationSendingProcessInfo',
        ]),
        methods: {
            handleCopyToClipboard(index) {
                try {
                    const el = document.querySelector(`#wallet-id-${index}`);
                    const temp = document.createElement('input');

                    document.body.appendChild(temp);
                    temp.value = el.innerHTML;
                    temp.select();

                    document.execCommand('copy');
                    temp.remove();
                } catch (err) {
                    console.log('Oops, unable to copy');
                }
            },
            handleSendRemittanceConfirmation(mentorId) {
                this.$store.dispatch({
                    type: 'SEND_REMITTANCE_CONFIRMATION',
                    mentorId
                })
            },
            handleShowQRCode(mentorId, wallet) {
                this.$store.dispatch({
                    type: 'SHOW_QR_CODE',
                    mentorId,
                    wallet
                })
            },
            handleCloseQRCode(mentorId) {
                this.$store.dispatch({
                    type: 'CLOSE_QR_CODE',
                    mentorId
                })
            }
        }
    }
</script>
