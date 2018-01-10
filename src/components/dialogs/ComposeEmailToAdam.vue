<template>
    <div class="modal fade js-compose-email-to-adam-dialog" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <form class="js-compose-email-to-adam-form" action="" method="post">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                        <h4 class="modal-title">Написать Адаму</h4>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label for="message">Сообщение:</label>
                            <textarea name="message" class="form-control" rows="6" id="message"></textarea>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Отмена</button>
                        <button type="submit" class="btn btn-success">Отправить</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
