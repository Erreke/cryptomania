export function showErrors($this, msg) {
    return $this.$swal({
        title: 'Упс! Что-то пошло не так!',
        text: msg,
        type: 'error',
        confirmButtonText: 'Закрыть'
    })
}

export function showSuccess($this, msg) {
    return $this.$swal({
        title: 'Операция прошла успешно!',
        text: msg,
        type: 'success',
        confirmButtonText: 'Закрыть'
    })
}