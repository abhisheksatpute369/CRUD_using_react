import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-info">
                <div class="container-fluid text-white">
                    <a class="navbar-brand" href="/">CRUD App</a>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link exact"  href="/Adduser">Adduser</a>
                            
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;