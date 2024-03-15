import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RegistroService } from './services/registro.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'formulario-Compras';
  licencia = [

    { ItemName: 'Parametros reportables modo fluidos corporales', value: 'Parametros reportables modo fluidos corporales' },
    { ItemName: 'Parametros reportables canal reticulocitos', value: 'Parametros reportables canal reticulocitos' },
    { ItemName: 'Parametros investigacion canal reticulocitos', value: 'Parametros investigacion canal reticulocitos' },

  ];
  equipos = [

    { ItemName: 'QUIMICA', value: 'QUIMICA' },
    { ItemName: 'INMUNOLOGIA', value: 'INMUNOLOGIA' },
    { ItemName: 'HEMATOLOGIA', value: 'HEMATOLOGIA' },
    { ItemName: 'COAGULACION', value: 'COAGULACION' },
    { ItemName: 'GASOMETRIA', value: 'GASOMETRIA' },
    { ItemName: 'INSUMOS', value: 'INSUMOS' },
    { ItemName: 'ELECTROLITOS', value: 'ELECTROLITOS' },
    { ItemName: 'MICROBIOLOGIA', value: 'MICROBIOLOGIA' },
    { ItemName: 'UROANALISIS', value: 'UROANALISIS' },
    { ItemName: 'PRUEBAS RAPIDAS', value: 'PRUEBAS RAPIDAS' }

  ];


  get institucion() {
    return this.RegistroForm?.get('institucion')!.invalid && this.RegistroForm?.get('institucion')!.touched
  }


  get codigo() {
    return this.RegistroForm?.get('codigo')!.invalid && this.RegistroForm?.get('codigo')!.touched
  }

  get linkproceso() {
    return this.RegistroForm?.get('linkproceso')!.invalid && this.RegistroForm?.get('linkproceso')!.touched
  }

  get tiempoconsumo() {
    return this.RegistroForm?.get('tiempoconsumo')!.invalid && this.RegistroForm?.get('tiempoconsumo')!.touched
  }

  get determinacion() {
    return this.RegistroForm?.get('determinacion')!.invalid && this.RegistroForm?.get('determinacion')!.touched
  }

  get presupuesto() {
    return this.RegistroForm?.get('presupuesto')!.invalid && this.RegistroForm?.get('presupuesto')!.touched
  }

  get entregacarpeta() {
    return this.RegistroForm?.get('entregacarpeta')!.invalid && this.RegistroForm?.get('entregacarpeta')!.touched
  }
  get terceraopcion() {
    return this.RegistroForm?.get('terceraopcion')!.invalid && this.RegistroForm?.get('terceraopcion')!.touched
  }

  get sistema() {
    return this.RegistroForm?.get('sistema')!.invalid && this.RegistroForm?.get('sistema')!.touched
  }
  get observacion() {
    return this.RegistroForm?.get('observacion')!.invalid && this.RegistroForm?.get('observacion')!.touched
  }
  get areas() {
    return this.RegistroForm.get('areas') as FormArray;
  }
  get licenciaEquiposHematologicos() {//eqquimica
    return this.RegistroForm.get('licenciaEquiposHematologicos') as FormArray;
  }

 
  


  ngOnInit(): void {


  }

  RegistroForm!: FormGroup;/* agregar codigo a lado de ItemName */
  constructor(private fb: FormBuilder,
    private registroServices : RegistroService) {
    this.crearformulario();
  }

  crearformulario() {
    this.RegistroForm = this.fb.group({
      institucion: ['', [Validators.required]],
      codigo: ['', [Validators.required]],
      linkproceso: ['', [Validators.required]],
      tiempoconsumo: ['', [Validators.required]],
      determinacion: ['', [Validators.required]],
      presupuesto: ['', [Validators.required]],
      entregacarpeta: ['', [Validators.required]],
      areas: this.fb.array([]),
      terceraopcion: ['', [Validators.required]],
      sistema: ['', [Validators.required]],
      equipoprincipal: this.fb.group({
        eqquimica: ['asd', [Validators.required]],
        valquimica: ['', [Validators.required]],
        eqinmunologia: ['', [Validators.required]],
        valinmunologia: ['', [Validators.required]],
        eqhematologia: ['', [Validators.required]],
        valhematologia: ['', [Validators.required]],
        eqcoagulacion: ['', [Validators.required]],
        valcoagulacion: ['', [Validators.required]],

        equipoquimica: ['', [Validators.required]],
        valorquimica: ['', [Validators.required]],
        eqgasometria: ['', [Validators.required]],
        valgasometria: ['', [Validators.required]],
        eqelectrolitros: ['', [Validators.required]],
        valelectrolitros: ['', [Validators.required]],
        equroanalisis: ['', [Validators.required]],
        valuroanalisis: ['', [Validators.required]],

        eqmicrobiologia: ['', [Validators.required]],
        valmicrobiologia: ['', [Validators.required]],
        eqpoc: ['', [Validators.required]],
        valpoc: ['', [Validators.required]],
      }),
      equipobackup: this.fb.group({
        bkquimica: ['', [Validators.required]],
        valbkquimica: ['', [Validators.required]],
        bkinmunologia: ['', [Validators.required]],
        valbkinmunologia: ['', [Validators.required]],
        bkhematologia: ['', [Validators.required]],
        valbkhematologia: ['', [Validators.required]],
        bkcoagulacion: ['', [Validators.required]],
        valbkcoagulacion: ['', [Validators.required]],

        bkuipoquimica: ['', [Validators.required]],
        valbkorquimica: ['', [Validators.required]],
        bkgasometria: ['', [Validators.required]],
        valbkgasometria: ['', [Validators.required]],
        bkelectrolitros: ['', [Validators.required]],
        valbkelectrolitros: ['', [Validators.required]],
        bkuroanalisis: ['', [Validators.required]],
        valbkuroanalisis: ['', [Validators.required]],

        bkmicrobiologia: ['', [Validators.required]],
        valbkmicrobiologia: ['', [Validators.required]],
       
      }),
      observacion: ['', [Validators.required]],
      licenciaEquiposHematologicos: this.fb.array([])
    })




  }



  guardarRegistro() {
   /*  if (this.RegistroForm.invalid) {
      return Object.values(this.RegistroForm.controls).forEach(control => {
        control.markAsTouched();
       console.log(control)
      })
    } */
    console.log(`json `, this.RegistroForm.value)
this.registroServices.getRegistro(this.RegistroForm.value)
.subscribe((res:any)=>{

})

  }
  onAreasChange(e: any) {
    const area = this.RegistroForm.get('areas') as FormArray;

    const areas = e.target.value;
    const checkboxArea = e.target;


    if (checkboxArea.checked) {
      area.push(this.fb.group({
        areas
      }));
    } else {
      area.controls.findIndex(z => console.log(`control checkbox`, z.value.areas))
      const indexArea = area.controls.findIndex(z => z.value.areas === areas);
      console.log(`area eliminada`, indexArea)
      area.removeAt(indexArea);
    }



  }
  onCheckboxChange(e: any) {

    const pruebasArray = this.RegistroForm.get('licenciaEquiposHematologicos') as FormArray;

    const valorinput = e.target.value;
    const checkbox = e.target;


    if (checkbox.checked) {
      pruebasArray.push(this.fb.group({
        valorinput
      }));
    } else {
      pruebasArray.controls.findIndex(y => console.log(y.value.valorinput))
      const index = pruebasArray.controls.findIndex(x => x.value.valorinput === valorinput);

      pruebasArray.removeAt(index);
    }
  }

}
