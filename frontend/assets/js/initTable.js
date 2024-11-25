var $remove = $('#remove')
var $aktifkan = $('#aktifkan')
var $nonaktifkan = $('#nonaktifkan')
var selections = []

function getIdSelections() {
    return $.map($table.bootstrapTable('getSelections'), function(row) {
        return row.id
    })
}

function perbaruiStatus(id, status, tipe_hapus = 'single') {
    openPreload();
    var csrfName = $('#csrfToken').attr('name');
    var csrfHash = $('#csrfToken').val();

    var url = baseUrl + '/' + controller + '/perbarui_status';
    var data = {
        id: id,
        status: status,
        [csrfName]: csrfHash
    };

    var $post = $.post(url, data, null, 'json');

    $post.done(function(response) {
        closePreload();
        $('input[name="' + response.csrf_name + '"]').val(response.csrf_hash);

        if (response.status == 'success') {
            var id_hapus = tipe_hapus == 'multiple' ? id : [id];
            if (status == 2) {
                $table.bootstrapTable('remove', {
                    field: 'id',
                    values: id_hapus
                });
            } else if (status == 1) {
                var arr = [];
                $.each(id, function(i, item) {
                    arr.push({
                        id: item,
                        field: 'status',
                        value: 'Aktif',
                        reinit: false
                    });
                });
                $table.bootstrapTable('updateCellByUniqueId', arr)
            } else if (status == 0) {
                var arr = [];
                $.each(id, function(i, item) {
                    arr.push({
                        id: item,
                        field: 'status',
                        value: 'Tidak Aktif',
                        reinit: false
                    });
                });
                $table.bootstrapTable('updateCellByUniqueId', arr)
            }
            Swal.fire({
                icon: response.status,
                title: response.pesan,
                timer: 2000,
                timerProgressBar: true,
                showConfirmButton: false,
            });
        } else {
            Swal.fire({
                icon: response.status,
                title: response.pesan,
            });
        }
    });

    $post.fail(function() {
        closePreload();
        Swal.fire({
            icon: 'error',
            title: 'Maaf anda tidak bisa melakukan ini',
        });
    });
}

$table.on('check.bs.table uncheck.bs.table ' +
    'check-all.bs.table uncheck-all.bs.table',
    function() {
        $remove.prop('disabled', !$table.bootstrapTable('getSelections').length)
        $aktifkan.prop('disabled', !$table.bootstrapTable('getSelections').length)
        $nonaktifkan.prop('disabled', !$table.bootstrapTable('getSelections').length)
        selections = getIdSelections()
    })


$remove.click(function() {
    var ids = getIdSelections();

    Swal.fire({
        title: 'Apakah anda yakin?',
        text: "Data yang Anda hapus akan hilang.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yakin',
        cancelButtonText: 'Batalkan',
        confirmButtonClass: 'btn btn-success',
        cancelButtonClass: 'btn btn-danger ms-2',
        buttonsStyling: false
    }).then(function(result) {
        if (result.value) {
            perbaruiStatus(ids, 2, 'multiple');
        }
    });

    // $remove.prop('disabled', true)
    // $aktifkan.prop('disabled', true)
    // $nonaktifkan.prop('disabled', true)

})

$aktifkan.click(function() {
    var ids = getIdSelections();

    Swal.fire({
        title: 'Apakah anda yakin?',
        text: "Data yang Anda aktfikan akan ditampilkan.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yakin',
        cancelButtonText: 'Batalkan',
        confirmButtonClass: 'btn btn-success',
        cancelButtonClass: 'btn btn-danger ms-2',
        buttonsStyling: false
    }).then(function(result) {
        if (result.value) {
            perbaruiStatus(ids, 1, 'multiple');
        }
    });
})

$nonaktifkan.click(function() {
    var ids = getIdSelections();

    Swal.fire({
        title: 'Apakah anda yakin?',
        text: "Data yang Anda aktfikan akan ditampilkan.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yakin',
        cancelButtonText: 'Batalkan',
        confirmButtonClass: 'btn btn-success',
        cancelButtonClass: 'btn btn-danger ms-2',
        buttonsStyling: false
    }).then(function(result) {
        if (result.value) {
            perbaruiStatus(ids, 0, 'multiple');
        }
    });
})