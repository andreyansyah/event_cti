$(function() {

    if ($('#simpan_reload')[0]) {
        $('#simpan_reload').on('click', function() {
            $('[name="tipe_simpan"]').val("simpan_reload");
        });
    }

    if ($('#simpan_saja')[0]) {
        $('#simpan_saja').on('click', function() {
            $('[name="tipe_simpan"]').val("simpan_saja");
        });
    }

    if ($('#simpan_kembali')[0]) {
        $('#simpan_kembali').on('click', function() {
            $('[name="tipe_simpan"]').val("simpan_kembali");
        });
    }

    $('#form-simpan').submit(function(e) {
        e.preventDefault();
        openPreload();
        var url = $(this).attr('action');
        var type = $(this).attr('method');
        tinyMCE.triggerSave();
        $.ajax({
            url: url,
            type: type,
            data: new FormData(this),
            enctype: 'multipart/form-data',
            dataType: "JSON",
            processData: false,
            contentType: false,
            // cache: false,
            // async: false,
            success: function(response) {
                closePreload();

                if (response.status == 'success') {
                    Swal.fire({
                        icon: response.status,
                        title: response.pesan,
                        timer: 3000,
                        timerProgressBar: true,
                        showConfirmButton: false,
                        onClose: function() {
                            openPreload();
                            if (response.tipe_simpan == 'simpan_reload') {
                                window.location.reload();
                            } else if (response.tipe_simpan == 'simpan_saja') {
                                closePreload();
                            } else {
                                window.location.replace(response.redirect);
                            }
                        }
                    });
                } else {
                    Swal.fire({
                        icon: response.status,
                        title: response.pesan,
                    });
                }
            },
            error: function(response) {
                closePreload();
                if (confirm('Ada yang tidak beres, harap reload page')) {
                    window.location.reload();
                }
            }
        });
    });

    $('.ajax-post').submit(function(e) {
        e.preventDefault();
        openPreload();
        var url = $(this).attr('action');
        var type = $(this).attr('method');
        var state = $(this).attr('state');
        $.ajax({
            url: url,
            type: type,
            data: new FormData(this),
            dataType: "JSON",
            processData: false,
            contentType: false,
            success: function(response) {
                closePreload();
                if (response.status == 'success') {
                    Swal.fire({
                        icon: response.status,
                        title: response.pesan,
                        timer: 1500,
                        timerProgressBar: true,
                        showConfirmButton: false,
                        onClose: function() {
                            openPreload();
                            if (response.tipe_simpan == 'simpan_reload') {
                                window.location.reload();
                            } else if (response.tipe_simpan == 'simpan_saja') {
                                closePreload();
                                $('.ajax-post').each(function() {
                                    this.reset();
                                });

                                if (state == 'tambah') {
                                    if (typeof aftertambah === "function") {
                                        aftertambah(response.rows);
                                    }
                                } else if (state == 'edit') {
                                    if (typeof afteredit === "function") {
                                        afteredit(response.rows);
                                    }
                                }

                            } else {
                                window.location.replace(response.redirect);
                            }
                        }
                    });
                } else {
                    Swal.fire({
                        icon: response.status,
                        title: response.pesan,
                    });
                }
            },
            error: function(response) {
                closePreload();
                Swal.fire({
                    icon: 'error',
                    title: 'Maaf anda tidak bisa melakukan ini',
                });
            }
        });
    });

    var url_cari_menu = $('#cari-menu').attr('url');
    // $('#cari-menu').autocomplete({
    //     source: url_cari_menu,
    //     minLength: 2,
    //     select: function (event, ui) {
    //         window.location.replace(ui.item.url);
    //     }
    // });
    $('#cari-menu').jqueryAutoComplete({
        serviceUrl: url_cari_menu,
        dataType: "JSON",
        onSelect: function(suggestion) {
            console.log(suggestion);
            window.location.replace(suggestion.url);
        }
    });
});

function createSlug(sourceId, targetId) {
    var value = $(sourceId).val();
    $(targetId).val(slugify(value));
}

function slugify(text) {
    return text.toString().toLowerCase()
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(/[^\w\-]+/g, '') // Remove all non-word chars
        .replace(/\-\-+/g, '-') // Replace multiple - with single -
        .replace(/^-+/, '') // Trim - from start of text
        .replace(/-+$/, ''); // Trim - from end of text
}

function openPreload() {
    $('body').loadingModal({
        text: 'Tunggu sebentar...'
    }).loadingModal('animation', 'foldingCube').loadingModal('backgroundColor', 'gray');
}

function closePreload() {
    $('body').loadingModal('destroy');
}