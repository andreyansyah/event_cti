<!doctype html>
<html lang="en">

<head>

    <meta charset="utf-8" />
    <title>Login | SmartCMS</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta content="SmartCMS Developed by Andreyansyah" name="description" />
    <meta content="Themesbrand" name="SmartCMS" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="theme-color" content="#04b1c7">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <link rel="shortcut icon" href="<?= base_url('themes/smart') ?>/images/favicon.png">
    <link href="<?= base_url('themes/smart') ?>/css/bootstrap.min.css" id="bootstrap-style" rel="stylesheet" type="text/css" />
    <link href="<?= base_url('themes/smart') ?>/css/icons.min.css" rel="stylesheet" type="text/css" />
    <link href="<?= base_url('themes/smart') ?>/css/app.min.css" id="app-style" rel="stylesheet" type="text/css" />
    <style>
        body::after {
            content: "";
            background: url(<?= base_url('assets/default/bg.jpg') ?>) no-repeat center center fixed;
            -webkit-background-size: cover;
            -moz-background-size: cover;
            -o-background-size: cover;
            background-size: cover;
            /* opacity: 0.6; */
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            position: absolute;
            z-index: -1;
        }
    </style>
</head>

<body class="authentication-bg">
    <div class="account-pages my-5 pt-sm-3">
        <div class="container">
            <div class="row align-items-center justify-content-center">
                <div class="col-md-8 col-lg-6 col-xl-5">
                    <div class="card">

                        <div class="card-body p-4">
                            <div class="text-center">
                                <a href="<?= base_url() ?>" class="mb-2 d-block auth-logo">
                                    <img src="<?= base_url('themes/smart') ?>/images/logo-dark.png" alt="CTIGroup" height="60" class="logo logo-dark">
                                    <img src="<?= base_url('themes/smart') ?>/images/logo-light.png" alt="CTIGroup" height="60" class="logo logo-light">
                                </a>
                            </div>
                            <div class="p-2 mt-4">
                                <?php if (session('error') !== null) : ?>
                                    <div class="alert alert-danger" role="alert"><?= session('error') ?></div>
                                <?php elseif (session('errors') !== null) : ?>
                                    <div class="alert alert-danger" role="alert">
                                        <?php if (is_array(session('errors'))) : ?>
                                            <?php foreach (session('errors') as $error) : ?>
                                                <?= $error ?>
                                                <br>
                                            <?php endforeach ?>
                                        <?php else : ?>
                                            <?= session('errors') ?>
                                        <?php endif ?>
                                    </div>
                                <?php endif ?>

                                <?php if (session('message') !== null) : ?>
                                    <div class="alert alert-success" role="alert"><?= session('message') ?></div>
                                <?php endif ?>
                                <form  state="" action="<?= url_to('login') ?>" method="POST">
                                    <div class="mb-3">
                                        <label class="form-label" for="email">Email</label>
                                        <input type="email" name="email" class="form-control" id="email" placeholder="Email" value="<?= old('email') ?>">
                                    </div>

                                    <div class="mb-3">
                                        <label class="form-label" for="password">Password</label>
                                        <input type="password" name="password" class="form-control" id="password" placeholder="Password">
                                    </div>

                                    <div class="mt-3">
                                        <button class="btn btn-primary w-sm waves-effect waves-light" type="submit">Login</button>
                                    </div>



                                    <div class="mt-4 text-center">
                                        <div class="signin-other-title">
                                            <h5 class="font-size-14 mb-3 title">Follow Us</h5>
                                        </div>


                                        <ul class="list-inline">
                                            <li class="list-inline-item">
                                                <a target="_blank" href="https://www.facebook.com/CTIZone/" class="social-list-item bg-primary text-white">
                                                    <i class="mdi mdi-facebook"></i>
                                                </a>
                                            </li>
                                            <li class="list-inline-item">
                                                <a target="_blank" href="https://twitter.com/ctizone?lang=en" class="social-list-item bg-secondary text-white">
                                                    <i class="mdi mdi-twitter"></i>
                                                </a>
                                            </li>
                                            <li class="list-inline-item">
                                                <a target="_blank" href="https://www.instagram.com/ctizone/?hl=en" class="social-list-item bg-danger text-white">
                                                    <i class="mdi mdi-instagram"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </form>

                                <div class=" text-center">
                                    <p>© <script>
                                            document.write(new Date().getFullYear())
                                        </script> CTI Group</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            <!-- end row -->
        </div>
        <!-- end container -->
    </div>

    <!-- JAVASCRIPT -->
    <script src="<?= base_url('themes/smart') ?>/libs/jquery/jquery.min.js"></script>
    <script src="<?= base_url('themes/smart') ?>/libs/bootstrap/js/bootstrap.bundle.min.js"></script>
</body>

</html>