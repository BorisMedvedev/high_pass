        // var Selector = document.querySelector("input[type='tel']");
        // var im = new Inputmask("+7 (999)-999-99-99");
        // im.mask(Selector);
        new JustValidate('.application-form', {
            rules: {
                name: {
                    required: true,
                    minLength: 2,
                    maxLength: 10
                },
                // phone: {
                //     required: true,
                //     function: (name, value) => {
                //         const phone = Selector.Inputmask.unmaskevalue()
                //         return Number(phone) && phone.length === 10
                //     }
                // },
                mail: {
                    required: true,
                    email: true,
                },
            },
        });
