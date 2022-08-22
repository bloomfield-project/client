import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

const top100Films = [
    { title: 'Asitha Muthumala' },
    { title: 'Gihan Weerasinghe' },
    { title: 'Dilukshan Bimsara' },
    { title: 'Devmini Perera' },
    { title: 'Nayanahari Gunawardhana' },
    { title: 'Wanindu Hasarange' },
    { title: 'Lasith Malinga' },
    { title: 'Sanath Jayasuriya' },
    { title: 'Niroshan Dickwella' },
    { title: 'Muththaiya Muralitharen' },
    { title: 'Nuwan Kulasekara' },
    { title: 'Lasith Ambuldeniya' },
  ];

export default function AddMultipleSelections(props) {

  return (

    <Stack spacing={3} sx={{ width: 500 }}>
      
      <Autocomplete
        multiple
        id="tags-outlined"
        options={top100Films}
        getOptionLabel={(option) => option.title}
        defaultValue={[top100Films[1]]}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            label={props.name}
            placeholder={props.placeHolder}
          />
        )}
      />
      
    </Stack>

  );

}


