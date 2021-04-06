import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';


let key = -1, ckey = 0, rkey = 0;
let Respuestas = [];

export const EncuestaContestar = (conf) => {

    const { t, i18n } = useTranslation()
    const RespuestasRef = useRef(new Array());
    let Preguntas = conf.conf;

    let Respuesta = {
        Pregunta: "",
        Respuesta: ""
    }, msgs = [];

    let Elemento;
    const GetQuestion = pregunta => {
        key++;
        if (pregunta.type === 'checkbox' && !pregunta.options) {
            pregunta.type = 'radio';
            pregunta.options = ['Yes', 'No'];
        }

        switch (pregunta.type) {
            case "checkbox":
                Elemento = (
                    <div className="mb-4" key={key}>
                        <label qlabel="true" className="block text-gray-700 text-sm font-bold mb-2">{pregunta.label}</label>
                        <div id="checkbox" ref={(element) => RespuestasRef.current.push(element)} className="" required={pregunta.required}>
                            {
                                pregunta.options.map(a => {
                                    ckey++;
                                    return (
                                        <div id={pregunta.label} key={"c" + ckey} className="">
                                            <label className="inline-flex items-center mt-1">
                                                <input type="checkbox" id={a} name="radio" value={a} className="form-checkbox h-5 w-5 text-indigo-600" />
                                                <span opt="true" className="ml-2 text-gray-700">{a}</span>
                                            </label>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                );

                Respuesta = {
                    Pregunta: pregunta.label,
                    Respuesta: RespuestasRef[key]
                }

                SaveRespuesta()
                return Elemento;
            case "number":
                Elemento = (
                    <div className="mb-4" key={key}>
                        <label qlabel="true" className="block text-gray-700 text-sm font-bold mb-2">{pregunta.label}</label>
                        <input id="number" ref={(element) => RespuestasRef.current.push(element)} type="number" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required={pregunta.required} />
                    </div>
                )

                Respuesta = {
                    Pregunta: pregunta.label,
                    Respuesta: RespuestasRef[key]
                }

                SaveRespuesta()
                return Elemento;
            case "text":
                Elemento = (
                    <div className="mb-4" key={key}>
                        <label qlabel="true" className="block text-gray-700 text-sm font-bold mb-2">{pregunta.label}</label>
                        <input id="text" ref={(element) => RespuestasRef.current.push(element)} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" required={pregunta.required} />
                    </div>
                )

                Respuesta = {
                    Pregunta: pregunta.label,
                    Respuesta: RespuestasRef[key]
                }

                SaveRespuesta()
                return Elemento;
            case "radio":
                Elemento = (
                    <div className="mb-4" key={key}>
                        <form>
                            <label qlabel="true" className="block text-gray-700 text-sm font-bold mb-2">{pregunta.label}</label>
                            <div id="radio" ref={(element) => RespuestasRef.current.push(element)} className="" required={pregunta.required}>
                                {
                                    pregunta.options.map(a => {
                                        rkey++;
                                        return (
                                            <div id={pregunta.label} key={"r" + rkey} className="">
                                                <input type="radio" id={a} name="radio" value={a} className="form-radio h-5 w-5 text-indigo-600" />
                                                <span opt="true" className="ml-2 text-gray-700">{a}</span>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </form>
                    </div>
                )

                Respuesta = {
                    Pregunta: pregunta.label,
                    Respuesta: RespuestasRef[key]
                }

                SaveRespuesta()
                return Elemento;
            default:
                break;
        }
    }

    const SaveRespuesta = () => {
        Respuesta = {
            Pregunta: "",
            Respuesta: ""
        };
    }

    const send = () => {

        if(msgs.length) {
            alert(msgs.join("\r\n"));
            msgs = [];
            return;
        }

        Respuestas = Respuestas.map(r => {
            const type = Preguntas.find(p => p.label === r.Titulo).type;

            switch (type) {
                case 'checkbox':
                case 'radio':
                    r.Respuesta = r.Respuesta.filter(opt => opt.checked);
                    break;
            
                default:
                    r.Respuesta = r.Respuesta.length ? r.Respuesta[0] : '';
                    break;
            }

            return r;
        });

        let token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
        fetch(document.location.pathname + '/response', {method: 'POST', headers: {'X-CSRF-TOKEN': token}, body: JSON.stringify(Respuestas)})
        .then(r=>r.text()).then(r => {
            if(r) {
                document.location.pathname = document.location.pathname + '/thanks';
            }
        });

        Respuestas = [];
        msgs = [];
    };

    const p = () => {
        let Pregunta = {
            Titulo: "",
            Respuesta: []
        };

        RespuestasRef.current.map(a => {
            Pregunta = {
                Titulo: "",
                Respuesta: []
            }

            let vacio = false;
            msgs = [];
            Pregunta.Titulo = a.parentElement.querySelector('[qlabel]').innerText;
            switch (a.id) {
                case "number":
                    if (a.required === false && a.value !== "") {
                        Pregunta.Respuesta.push(a.value)
                    }
                    if (a.required === false && a.value === "") {
                        // Hacer algo en caso de que la pregunta sea requerida pero no se halla completado
                        // alert("Pregunta requerida")
                        vacio = true;
                    }
                    if (a.value === "") {
                        // vacio = true;
                    }
                    break;
                case "text":
                    if (a.required === false && a.value !== "") {
                        Pregunta.Respuesta.push(a.value)
                    }
                    if (a.required === false && a.value === "") {
                        // Hacer algo en caso de que la pregunta sea requerida pero no se halla completado
                        vacio = true
                        // alert("Pregunta requerida")
                    }
                    if (a.value === "") {
                        // vacio = true
                    }
                    break;
                case "checkbox":
                    for (let i = 0; i < a.children.length; i++) {
                        const e = a.children[i],
                        ch = e.querySelector('input[type="checkbox"]'),
                        lbl = e.querySelector('[opt]');

                        if (ch.checked === false && Pregunta.Respuesta.length === 0) {
                            vacio = true;
                        }
                        else {
                            let resp = {
                                opcion: lbl.innerText,
                                checked: ch.checked
                            }
                            Pregunta.Respuesta.push(resp);
                            vacio = false;
                        }
                    }

                    if (a.required === true && Pregunta.Respuesta.length === 0) {
                        // Hacer algo en caso de que la pregunta sea requerida pero no se halla completado
                        vacio = true
                        // alert("Pregunta requerida")
                    }
                    break;
                case "radio":
                    Pregunta.Titulo = a.parentElement.children[0].innerText;

                    for (let i = 0; i < a.children.length; i++) {
                        const e = a.children[i];
                        if (e.children[0].checked === false && Pregunta.Respuesta.length === 0) {
                            vacio = true
                        }
                        else {
                            let resp = {
                                opcion: e.children[1].innerText,
                                checked: e.children[0].checked
                            }
                            Pregunta.Respuesta.push(resp)
                            vacio = false
                        }
                    }

                    if (a.required === true && Pregunta.Respuesta.length === 0) {
                        // Hacer algo en caso de que la pregunta sea requerida pero no se halla completado
                        vacio = true
                        // alert("Pregunta requerida")
                    }
                    break;
                default:
                    break;
            }
            if (!vacio) {
                Respuestas.push(Pregunta)
            } else {
                msgs.push(`Please answer question "${Pregunta.Titulo}"`);
            }
        })

        send();
    }

    return (
        <div className="Contestar__main">
            <div className="card my-3">
                <div className="card-body">
                    {
                        Preguntas.map(a => {
                            return GetQuestion(a)
                        })
                    }
                </div>
            </div>
            <div>
                <button className="btn btn-success" onClick={p}>{t('Finalizar')}</button>
            </div>
        </div>
    )
}
