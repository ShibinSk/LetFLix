import React from 'react'

const Test = () => {
  return (
    <div class="container-fluid menu py-6">
    <div class="container">
        <div class="text-center wow bounceInUp" data-wow-delay="0.1s">
            <small class="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">Our Menu</small>
            <h1 class="display-5 mb-5">Most Popular Food in the World</h1>
        </div>
        <div class="tab-class text-center">
            <ul class="nav nav-pills d-inline-flex justify-content-center mb-5 wow bounceInUp" data-wow-delay="0.1s">
                <li class="nav-item p-2">
                    {/* <a class="d-flex py-2 mx-2 border border-primary bg-white rounded-pill active" data-bs-toggle="pill" href="#tab-6">
                        <span class="text-dark"   >Starter</span>
                    </a> */}
                </li>
                <li class="nav-item p-2">
                    {/* <a class="d-flex py-2 mx-2 border border-primary bg-white rounded-pill" data-bs-toggle="pill" href="#tab-7">
                        <span class="text-dark">Main Course</span>
                    </a> */}
                </li>
                <li class="nav-item p-2">
                    {/* <a class="d-flex py-2 mx-2 border border-primary bg-white rounded-pill" data-bs-toggle="pill" href="#tab-8">
                        <span class="text-dark">Drinks</span>
                    </a> */}
                </li>
                <li class="nav-item p-2">
                    {/* <a class="d-flex py-2 mx-2 border border-primary bg-white rounded-pill" data-bs-toggle="pill" href="#tab-9">
                        <span class="text-dark">Offers</span>
                    </a> */}
                </li>
                <li class="nav-item p-2">
                    {/* <a class="d-flex py-2 mx-2 border border-primary bg-white rounded-pill" data-bs-toggle="pill" href="#tab-10">
                        <span class="text-dark">Our Spesial</span>
                    </a> */}
                </li>
            </ul>
            <div id="tab-7" class="tab-pane fade show p-0">
                    <div class="row g-4">
                        <div class="col-lg-6">
                        
                            <div class="menu-item d-flex align-items-center">
                              
                                {/* <img class="flex-shrink-0 img-fluid rounded-circle" src="img/menu-01.jpg" alt=""> */}
                                <img class="flex-shrink-0 img-fluid rounded-circle" src="http://192.168.1.108:5500/img/menu-01.jpg" alt="" />
                                <div class="w-100 d-flex flex-column text-start ps-4">
                                    <div class="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                        <h4>Argentinian</h4>
                                        <h4 class="text-primary">$90</h4>
                                    </div>
                                    <p class="mb-0">Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="menu-item d-flex align-items-center">
                                {/* <img class="flex-shrink-0 img-fluid rounded-circle" src="img/menu-03.jpg" alt=""> */}
                                <img class="flex-shrink-0 img-fluid rounded-circle" src="http://192.168.1.108:5500/img/menu-01.jpg" alt="" />
                                <div class="w-100 d-flex flex-column text-start ps-4">
                                    <div class="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                        <h4>Crispy</h4>
                                        <h4 class="text-primary">$90</h4>
                                    </div>
                                    <p class="mb-0">Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="menu-item d-flex align-items-center">
                                {/* <img class="flex-shrink-0 img-fluid rounded-circle" src="img/menu-05.jpg" alt=""> */}
                                <img class="flex-shrink-0 img-fluid rounded-circle" src="http://192.168.1.108:5500/img/menu-01.jpg" alt="" />
                                <div class="w-100 d-flex flex-column text-start ps-4">
                                    <div class="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                        <h4>Sabudana Tikki</h4>
                                        <h4 class="text-primary">$90</h4>
                                    </div>
                                    <p class="mb-0">Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="menu-item d-flex align-items-center">
                                {/* <img class="flex-shrink-0 img-fluid rounded-circle" src="img/menu-07.jpg" alt=""> */}
                                <img class="flex-shrink-0 img-fluid rounded-circle" src="http://192.168.1.108:5500/img/menu-01.jpg" alt="" />
                                <div class="w-100 d-flex flex-column text-start ps-4">
                                    <div class="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                        <h4>Blooming</h4>
                                        <h4 class="text-primary">$90</h4>
                                    </div>
                                    <p class="mb-0">Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="menu-item d-flex align-items-center">
                                {/* <img class="flex-shrink-0 img-fluid rounded-circle" src="img/menu-08.jpg" alt=""> */}
                                <img class="flex-shrink-0 img-fluid rounded-circle" src="http://192.168.1.108:5500/img/menu-01.jpg" alt="" />
                                <div class="w-100 d-flex flex-column text-start ps-4">
                                    <div class="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                        <h4>Argentinian</h4>
                                        <h4 class="text-primary">$90</h4>
                                    </div>
                                    <p class="mb-0">Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="menu-item d-flex align-items-center">
                                {/* <img class="flex-shrink-0 img-fluid rounded-circle" src="img/menu-03.jpg" alt=""> */}
                                <img class="flex-shrink-0 img-fluid rounded-circle" src="http://192.168.1.108:5500/img/menu-01.jpg" alt="" />
                                <div class="w-100 d-flex flex-column text-start ps-4">
                                    <div class="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                        <h4>Lemon</h4>
                                        <h4 class="text-primary">$90</h4>
                                    </div>
                                    <p class="mb-0">Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="menu-item d-flex align-items-center">
                                {/* <img class="flex-shrink-0 img-fluid rounded-circle" src="img/menu-02.jpg" alt=""> */}
                                <img class="flex-shrink-0 img-fluid rounded-circle" src="http://192.168.1.108:5500/img/menu-01.jpg" alt="" />
                                <div class="w-100 d-flex flex-column text-start ps-4">
                                    <div class="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                        <h4>Water Drink</h4>
                                        <h4 class="text-primary">$90</h4>
                                    </div>
                                    <p class="mb-0">Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="menu-item d-flex align-items-center">
                                {/* <img class="flex-shrink-0 img-fluid rounded-circle" src="img/menu-01.jpg" alt=""> */}
                                <img class="flex-shrink-0 img-fluid rounded-circle" src="http://192.168.1.108:5500/img/menu-01.jpg" alt="" />
                                <div class="w-100 d-flex flex-column text-start ps-4">
                                    <div class="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                        <h4>Salty lemon</h4>
                                        <h4 class="text-primary">$90</h4>
                                    </div>
                                    <p class="mb-0">Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
</div>
  );
}

export default Test
